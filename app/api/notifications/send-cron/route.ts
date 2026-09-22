import { NextResponse } from "next/server";
import {
  getAllPushSubscribers,
  recordPushSent,
  getSubscriberCount
} from "@/lib/notificationStore";
import {
  getNextUniqueTemplate,
  NOTIFICATION_TEMPLATES
} from "@/lib/notificationTemplates";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const previewOnly = url.searchParams.get("preview") === "true";
    const testState = url.searchParams.get("state") || "Madhya Pradesh";

    const subscribers = getAllPushSubscribers();
    const stats = getSubscriberCount();

    // Generate preview of the next unique messages for different states
    const previewExamples = [
      {
        state: testState,
        ...getNextUniqueTemplate([], testState, "hi")
      },
      {
        state: "Maharashtra",
        ...getNextUniqueTemplate([], "Maharashtra", "hi")
      },
      {
        state: "Punjab",
        ...getNextUniqueTemplate([], "Punjab", "hi")
      },
      {
        state: "Tamil Nadu",
        ...getNextUniqueTemplate([], "Tamil Nadu", "en")
      }
    ];

    if (previewOnly) {
      return NextResponse.json({
        success: true,
        subscribersCount: stats.total,
        totalAvailableTemplates: NOTIFICATION_TEMPLATES.length,
        previewExamples
      });
    }

    // Process actual subscribers queue
    const dispatchResults: Array<{
      subscriberId: string;
      state: string;
      templateId: string;
      title: string;
      body: string;
      url: string;
      dispatchedAt: string;
    }> = [];

    for (const sub of subscribers) {
      const nextMessage = getNextUniqueTemplate(
        sub.sentTemplates || [],
        sub.state || "Madhya Pradesh",
        sub.language || "hi"
      );

      recordPushSent(sub.id, nextMessage.templateId);

      dispatchResults.push({
        subscriberId: sub.id,
        state: sub.state,
        templateId: nextMessage.templateId,
        title: nextMessage.title,
        body: nextMessage.body,
        url: nextMessage.url,
        dispatchedAt: new Date().toISOString()
      });
    }

    return NextResponse.json({
      success: true,
      processedSubscribers: dispatchResults.length,
      dispatches: dispatchResults.slice(0, 10), // return sample
      previewExamples
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process notifications" },
      { status: 500 }
    );
  }
}

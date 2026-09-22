// Organic Mushroom Farm - Push Notification & Background Recovery Service Worker
// Version: 1.1.0

let activeTimers = {};

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for messages from client windows (e.g. 5-sec confirmation or 10-sec exit recovery)
self.addEventListener('message', (event) => {
  if (!event.data) return;

  const { type, delayMs, title, options, timerKey } = event.data;

  if (type === 'SCHEDULE_NOTIFICATION') {
    // Generic background delayed notification (e.g. 5s confirmation)
    setTimeout(() => {
      self.registration.showNotification(title || '🍄 Organic Mushroom Farm', options || {});
    }, delayMs || 5000);
  }

  if (type === 'SCHEDULE_FUNNEL_RECOVERY' || type === 'SCHEDULE_ABANDONED_TRAINING') {
    const key = timerKey || 'funnel_recovery';
    // Clear any previous timer with this key
    if (activeTimers[key]) {
      clearTimeout(activeTimers[key]);
    }

    activeTimers[key] = setTimeout(async () => {
      delete activeTimers[key];
      try {
        const clientList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
        // Check if user is actively looking at the site on this path
        const checkPath = options?.checkUrl || options?.url || '';
        const isUserActiveOnSite = clientList.some(
          (c) => c.visibilityState === 'visible' && (checkPath ? c.url.includes(checkPath) : true)
        );

        if (!isUserActiveOnSite) {
          self.registration.showNotification(title, {
            body: options?.body || 'मशरूम फार्म अपडेट्स और ऑफर्स के लिए अभी देखें।',
            icon: options?.icon || 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
            badge: options?.badge || 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
            vibrate: [200, 100, 200],
            tag: options?.tag || `omf-${key}`,
            renotify: true,
            data: {
              url: options?.url || '/',
              timestamp: Date.now()
            }
          });
        }
      } catch (err) {
        console.warn('Could not show funnel recovery notification:', err);
      }
    }, delayMs || 10000);
  }

  if (type === 'CANCEL_FUNNEL_RECOVERY' || type === 'CANCEL_ABANDONED_TRAINING') {
    const key = timerKey || 'funnel_recovery';
    if (activeTimers[key]) {
      clearTimeout(activeTimers[key]);
      delete activeTimers[key];
    }
  }

  if (type === 'SCHEDULE_DAILY_SLOT') {
    const key = timerKey || 'daily_slot';
    if (activeTimers[key]) {
      clearTimeout(activeTimers[key]);
    }
    activeTimers[key] = setTimeout(() => {
      delete activeTimers[key];
      self.registration.showNotification(title || '🍄 Organic Mushroom Farm', {
        body: options?.body || 'नया मशरूम ट्रेनिंग व मंडी भाव अपडेट देखें।',
        icon: options?.icon || 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
        badge: options?.badge || 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
        vibrate: [200, 100, 200],
        tag: options?.tag || `omf-daily-${Date.now()}`,
        renotify: true,
        data: {
          url: options?.url || '/',
          timestamp: Date.now()
        }
      });
    }, delayMs || 60000);
  }
});

self.addEventListener('push', (event) => {
  let data = {
    title: '🍄 Organic Mushroom Farm',
    body: 'Naya training batch aur daily farming updates!',
    icon: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
    badge: 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
    url: '/training',
    tag: 'omf-general-update',
    timestamp: Date.now()
  };

  if (event.data) {
    try {
      const parsed = event.data.json();
      data = Object.assign(data, parsed);
    } catch (err) {
      data.body = event.data.text() || data.body;
    }
  }

  const notificationOptions = {
    body: data.body,
    icon: data.icon || 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
    badge: data.badge || 'https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png',
    image: data.image || undefined,
    data: {
      url: data.url || '/',
      timestamp: data.timestamp || Date.now()
    },
    vibrate: [100, 50, 100],
    tag: data.tag || 'omf-alert',
    renotify: true,
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification(data.title, notificationOptions)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // If a window is already open with the target URL, focus it
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url && client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }
      // Otherwise open a new window/tab
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://mock.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'mock-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface TransactionData {
  customerName: string;
  phone: string;
  email: string;
  productType: string;
  amount: number;
  status: string;
  paymentId: string;
  orderId?: string;
  invoiceId?: string;
  eventType: string;
}

export const dbService = {
  /**
   * Save or update a transaction using payment_id as the unique key.
   * This naturally handles preventing duplicate insertions for the same payment.
   */
  async saveTransaction(data: TransactionData, eventId: string) {
    if (!process.env.SUPABASE_URL || process.env.SUPABASE_URL.includes('mock')) {
      console.log('[Mock DB] Saved transaction:', data.paymentId);
      return { success: true, mock: true };
    }

    try {
      const { data: result, error } = await supabase
        .from('transactions')
        .upsert({
          payment_id: data.paymentId,
          event_id: eventId,
          customer_name: data.customerName,
          phone: data.phone,
          email: data.email,
          product_type: data.productType,
          amount: data.amount,
          status: data.status,
          order_id: data.orderId,
          invoice_id: data.invoiceId,
          event_type: data.eventType,
          updated_at: new Date().toISOString(),
          purchase_timestamp: new Date().toISOString(),
        }, {
          onConflict: 'payment_id'
        })
        .select();

      if (error) {
        console.error('[Supabase] Error saving transaction:', error.message);
        throw error;
      }
      return { success: true, data: result };
    } catch (error) {
      console.error('[Supabase] Database save error:', error);
      throw error;
    }
  },

  /**
   * Validation using Payment ID.
   * Checks if this exact payment ID and event type was already processed
   * to avoid processing same webhook twice.
   */
  async isWebhookProcessed(paymentId: string, eventType: string): Promise<boolean> {
    if (!process.env.SUPABASE_URL || process.env.SUPABASE_URL.includes('mock')) return false;

    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('event_type')
        .eq('payment_id', paymentId)
        .eq('event_type', eventType)
        .single();
        
      if (error && error.code !== 'PGRST116') throw error;
      return !!data;
    } catch (error) {
      console.error('[Supabase] Check webhook error:', error);
      return false; 
    }
  },

  async getPendingTransactions() {
    if (!process.env.SUPABASE_URL || process.env.SUPABASE_URL.includes('mock')) return [];
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('status', 'created')
        .gte('created_at', yesterday.toISOString());

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('[Supabase] Get pending error:', error);
      return [];
    }
  }
};

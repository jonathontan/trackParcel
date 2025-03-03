export interface Job {
  id: string;
  type: string;
  recipient_sender_device_signature_file_url: string | null;
  signature_file_url: string | null;
  photo_1_file_url: string | null;
  photo_2_file_url: string | null;
  photo_3_file_url: string | null;
  photo_4_file_url: string | null;
  photo_5_file_url: string | null;
  photo_6_file_url: string | null;
  photo_7_file_url: string | null;
  photo_8_file_url: string | null;
  photo_9_file_url: string | null;
  photo_10_file_url: string | null;
  primary_job_status: string;
  open_to_marketplace: boolean;
  marketplace_offer: number;
  do_number: string;
  attempt: number;
  date: string;
  start_date: string;
  completion_date: string | null;
  time_window_from: string | null;
  time_window_to: string | null;
  job_age: number;
  job_release_time: string | null;
  job_time: string | null;
  time_window: string | null;
  job_received_date: string | null;
  tracking_number: string | null;
  order_number: string | null;
  job_type: string | null;
  job_sequence: string | null;
  job_fee: number | null;
  address_lat: number | null;
  address_lng: number | null;
  address: string;
  company_name: string | null;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  postal_code: string;
  city: string | null;
  state: string | null;
  country: string | null;
  billing_address: string | null;
  deliver_to_collect_from: string;
  last_name: string | null;
  phone_number: string;
  sender_phone_number: string | null;
  other_phone_numbers: string | null;
  fax_number: string | null;
  instructions: string | null;
  assign_to: string;
  notify_email: string | null;
  webhook_url: string | null;
  zone: string;
  customer: string;
  account_number: string | null;
  job_owner: string | null;
  invoice_number: string;
  invoice_amount: number | null;
  payment_mode: string | null;
  payment_amount: number | null;
  group_id: string;
  group_name: string;
  group_code: string | null;
  source: string | null;
  weight: number | null;
  parcel_width: number | null;
  parcel_length: number | null;
  parcel_height: number | null;
  cubic_meters: number | null;
  boxes: number | null;
  cartons: number | null;
  pieces: number | null;
  envelopes: number | null;
  pallets: number | null;
  bins: number | null;
  trays: number | null;
  bundles: number | null;
  rolls: number | null;
  number_of_shipping_labels: number | null;
  attachment_url: string | null;
  detrack_number: string;
  status: string;
  tracking_status: string;
  reason: string | null;
  received_by_sent_by: string | null;
  note: string | null;
  carrier: string;
  pod_time: string | null;
  pod_lat: string;
  pod_lng: string;
  pod_address: string;
  address_tracked_at: string | null;
  arrived_lat: string | null;
  arrived_lng: string | null;
  arrived_address: string | null;
  arrived_at: string | null;
  texted_at: string | null;
  called_at: string | null;
  serial_number: string | null;
  recipient_sender_device_pod_at: string | null;
  recipient_sender_device_signed_by: string | null;
  signed_at: string | null;
  photo_1_at: string | null;
  photo_2_at: string | null;
  photo_3_at: string | null;
  photo_4_at: string | null;
  photo_5_at: string | null;
  photo_6_at: string | null;
  photo_7_at: string | null;
  photo_8_at: string | null;
  photo_9_at: string | null;
  photo_10_at: string | null;
  actual_weight: number | null;
  temperature: string | null;
  hold_time: string | null;
  payment_collected: string | null;
  auto_reschedule: string | null;
  actual_crates: number | null;
  actual_pallets: number | null;
  actual_utilization: number | null;
  goods_service_rating: number | null;
  driver_rating: number | null;
  customer_feedback: string | null;
  eta_time: string | null;
  live_eta: string | null;
  depot: string | null;
  depot_contact: string | null;
  depot_contact_no: string | null;
  depot_address: string | null;
  department: string | null;
  sales_person: string | null;
  identification_number: string | null;
  bank_prefix: string | null;
  run_number: string | null;
  head_to_delivery_at: string | null;
  pod_at: string | null;
  job_price: number | null;
  insurance_price: number | null;
  insurance_coverage: boolean;
  total_price: number | null;
  payer_type: string | null;
  remarks: string | null;
  items_count: number;
  service_type: string | null;
  warehouse_address: string | null;
  destination_time_window: string | null;
  door: string | null;
  time_zone: string | null;
  created_at: string;
  updated_at: string;
  on_demand: boolean;
  vehicle_type: string | null;
  priority: string | null;
  service_time: string | null;
  contractor_group_name: string;
  contractor_group_ids: string[];
  connect_token: string | null;
  connect_host: string | null;
  connect_id: string | null;
  verification_code: number;
  locker_address: string | null;
  locker_lat: string | null;
  locker_lng: string | null;
  locker_transaction_id: string | null;
  locker_transaction_status: string | null;
  locker_station_id: string | null;
  locker_error: string | null;
  use_locker: boolean;
  geofence_ack_at: string | null;
  geofence_ack_lat: string | null;
  geofence_ack_lng: string | null;
  mass_pod: string | null;
  pod_gps_status: string | null;
  pod_gps_permission: string | null;
  photo_preview_ack_at: string | null;
  photo_preview_ack_lat: string | null;
  photo_preview_ack_lng: string | null;
  pick_up_photo_preview_ack_at: string | null;
  pick_up_photo_preview_ack_lat: string | null;
  pick_up_photo_preview_ack_lng: string | null;
  rate_card_id: string | null;
  rate_card_version: string | null;
  rate_card_chargeable_id: string | null;
  rate_card_chargeable: string | null;
  tracking_link: string;
  job_order: string | null;
  tracking_status_code: string;
  driver_mobile_number: string;
  reattempted: string | null;
  cubic_meter: number | null;
  contactless_signature_link: string;
  can_reattempt: boolean;
  items: Item[];
  milestones: Milestone[];
}

export interface Item {
  id: string;
  sku: string | null;
  purchase_order_number: string | null;
  batch_number: string | null;
  expiry_date: string | null;
  description: string;
  comments: string | null;
  quantity: number;
  unit_of_measure: string | null;
  checked: boolean;
  actual_quantity: number | null;
  inbound_quantity: number | null;
  unload_time_estimate: string | null;
  unload_time_actual: string | null;
  follow_up_quantity: number | null;
  follow_up_reason: string | null;
  rework_quantity: number | null;
  rework_reason: string | null;
  reject_quantity: number;
  reject_reason: string | null;
  weight: number | null;
  serial_numbers: string;
  photo_url: string | null;
  unit_price: number | null;
  fixed_price: number | null;
  minimum_quantity: number | null;
  serial_numbers_list: string[];
}

export interface Milestone {
  status: string;
  assign_to: string | null;
  reason: string | null;
  pod_at: string;
  created_at: string;
  user_name: string | null;
}
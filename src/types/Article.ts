export type Article = {
  item_id: number;
  resolved_id: number;
  given_url: string;
  given_title: string;
  favorite: string;
  status: string;
  time_added: string;
  time_updated: string;
  time_read: string;
  sort_id: number;
  resolved_title: string;
  resolved_url: string;
  is_article: string; // 1/0
  word_count: string; // "1010"
  time_to_read: number;
  top_image_url: string;
  image: {
    item_id: string; // "3750857667"
    src: string; // url
  },
  domain_metadata?: {
    name: string;
    logo: string;
  },
  listen_duration_estimate: number
};
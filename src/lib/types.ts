export interface DevotionalEntry {
  day_number: number;
  month_number: number;
  day_of_month: number;
  weekly_subtheme?: string;
  title: string;
  scripture_primary_reference: string;
  scripture_primary_text: string;
  scripture_translation: string;
  reflection_body: string;
  reflection_questions: string[];
  guided_prayer: string;
  daily_intention: string;
  practical_action: string;
  evening_reflection_prompt: string;
  is_placeholder?: boolean;
}

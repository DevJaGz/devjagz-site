import { TemplateRef } from "@angular/core";

export interface SpokenMessageEvent {
  state: 'hide' | 'show' | 'show-last' | 'initial';
  title?: string;
  message?: string;
  templateMessage?: TemplateRef<unknown>;
}
interface IEventPage {
  title: string;
  content_urls: {
    desktop: { page: string };
  };
}

interface IEvent {
  year: number;
  text: string;
  pages: IEventPage[];
}

export type { IEventPage, IEvent };

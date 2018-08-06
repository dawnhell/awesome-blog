export class Post {
    title: string;
    tags: string[];
    category: string;
    date: string;
    content: string;
    preview: string;
    url: string;
    slug: string;

    constructor (title, tags, category, date, content, preview, url, slug) {
        this.title = title;
        this.tags = tags;
        this.category = category;
        this.date = date;
        this.content = content;
        this.preview = preview;
        this.url = url;
        this.slug = slug;
    }
}

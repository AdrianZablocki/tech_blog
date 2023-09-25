export default function sitemap() {
  return [
    {
      url: 'https://appsynth.pl',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://appsynth.pl/article',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    }
  ]
}
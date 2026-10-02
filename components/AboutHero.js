import PageHero from './PageHero'

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="About Modax"
      title="Building the future"
      accent=" of software"
      description="Modax is a software development company that builds both custom solutions for clients and owns products that solve real business challenges. We're passionate about creating technology that makes businesses more efficient and successful."
      stats={[
        { value: '2019', label: 'Founded' },
        { value: '20+', label: 'Projects' },
      ]}
    />
  )
}

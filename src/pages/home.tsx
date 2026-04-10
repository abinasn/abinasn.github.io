import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../sections/hero'
import Work from '../sections/work'
import Skills from '../sections/skills'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 md:px-8 py-12 md:py-16 flex flex-col gap-20 md:gap-24">
        <Hero />
        <Work />
        <Skills />
      </main>

      <Footer />
    </div>
  )
}
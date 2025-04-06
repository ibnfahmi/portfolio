import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div>
            <Link href="/" aria-label="Ahmed Fahmi">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src="/img/avatar.jpg" alt="Ahmed Fahmi" fill className="object-cover" priority />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary">
              Case studies
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
          </nav>
          <div className="flex items-center gap-10">  {/* Changed from gap-2 to gap-10 (32px) */}
            <ThemeToggle />
            <Button variant="default" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section with Avatar */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden">  {/* Removed border-4 border-primary */}
            <Image src="/img/avatar.jpg" alt="Your Name" fill className="object-cover" priority />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">Ahmed fahmi</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[700px]">
            Product Designer crafting beautiful, user-centered digital experiences
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <Link href="#portfolio">View My Work</Link>
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" /> Download Resume
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4">
                I'm a passionate product designer with over 5 years of experience creating intuitive and engaging user
                experiences. My approach combines user research, strategic thinking, and creative problem-solving to
                build products that people love.
              </p>
              <p className="text-lg mb-4">
                With a background in both design and front-end development, I bring a unique perspective to product
                design that bridges the gap between aesthetics and functionality.
              </p>
              <p className="text-lg">
                When I'm not designing, you can find me exploring new hiking trails, experimenting with photography, or
                attending local design meetups.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="About me" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">My Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative h-[240px]">
                  <Image
                    src={`/placeholder.svg?height=240&width=400&text=Project+${item}`}
                    alt={`Project ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this project and the problem it solves.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>UX Design</Badge>
                    <Badge>UI Design</Badge>
                    <Badge>Prototyping</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <Link href="#">
                      View Case Study <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Work Experience</h2>
          <div className="space-y-12">
            {[
              {
                role: "Senior Product Designer",
                company: "Tech Innovations Inc.",
                period: "2021 - Present",
                description:
                  "Led the redesign of the company's flagship product, resulting in a 40% increase in user engagement. Collaborated with cross-functional teams to implement new features and improve user flows.",
              },
              {
                role: "Product Designer",
                company: "Digital Solutions Co.",
                period: "2018 - 2021",
                description:
                  "Designed user interfaces for web and mobile applications. Conducted user research and usability testing to inform design decisions. Created wireframes, prototypes, and high-fidelity mockups.",
              },
              {
                role: "UI/UX Designer",
                company: "Creative Agency",
                period: "2016 - 2018",
                description:
                  "Worked on various client projects across different industries. Developed brand identities, design systems, and responsive web designs. Collaborated with developers to ensure design implementation.",
              },
            ].map((job, index) => (
              <div key={index} className="grid md:grid-cols-[200px_1fr] gap-6">
                <div>
                  <p className="text-muted-foreground">{job.period}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-primary font-medium mb-4">{job.company}</p>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills & Tools</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3">UI Design</Badge>
                <Badge className="text-sm py-1 px-3">UX Design</Badge>
                <Badge className="text-sm py-1 px-3">Interaction Design</Badge>
                <Badge className="text-sm py-1 px-3">Wireframing</Badge>
                <Badge className="text-sm py-1 px-3">Prototyping</Badge>
                <Badge className="text-sm py-1 px-3">Design Systems</Badge>
                <Badge className="text-sm py-1 px-3">Visual Design</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3">Figma</Badge>
                <Badge className="text-sm py-1 px-3">Adobe XD</Badge>
                <Badge className="text-sm py-1 px-3">Sketch</Badge>
                <Badge className="text-sm py-1 px-3">Illustrator</Badge>
                <Badge className="text-sm py-1 px-3">Photoshop</Badge>
                <Badge className="text-sm py-1 px-3">InVision</Badge>
                <Badge className="text-sm py-1 px-3">Zeplin</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-sm py-1 px-3">HTML</Badge>
                <Badge className="text-sm py-1 px-3">CSS</Badge>
                <Badge className="text-sm py-1 px-3">JavaScript</Badge>
                <Badge className="text-sm py-1 px-3">React</Badge>
                <Badge className="text-sm py-1 px-3">Tailwind CSS</Badge>
                <Badge className="text-sm py-1 px-3">Git</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:hello@ahmedfahmi.com" className="hover:text-primary">
                    hello@ahmedfahmi.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://linkedin.com/in/ahmedfahmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/ahmedfahmi
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/ahmedfahmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    github.com/ahmedfahmi
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Your message"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ahmed Fahmi. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:hello@ahmedfahmi.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}


import { Star, ShoppingCart, BookOpen, Zap, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Index() {
  const courses = [
    {
      id: 1,
      title: 'English Fundamentals',
      description: 'Master the basics of English grammar, vocabulary, and pronunciation.',
      price: 49.99,
      originalPrice: 79.99,
      level: 'Beginner',
      rating: 4.8,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1516534775068-bb57e39c1a1d?w=400&h=300&fit=crop',
      students: 5200,
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'Business English Mastery',
      description: 'Perfect for professionals. Learn corporate communication and presentation skills.',
      price: 79.99,
      originalPrice: 129.99,
      level: 'Intermediate',
      rating: 4.9,
      reviews: 521,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      students: 3800,
      duration: '10 weeks',
    },
    {
      id: 3,
      title: 'IELTS Preparation Course',
      description: 'Comprehensive guide to ace your IELTS exam with strategies and practice tests.',
      price: 99.99,
      originalPrice: 149.99,
      level: 'Advanced',
      rating: 4.7,
      reviews: 289,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      students: 2100,
      duration: '12 weeks',
    },
  ];

  const ebooks = [
    {
      id: 101,
      title: 'English Idioms & Phrases',
      description: '500+ essential idioms explained with real-world examples.',
      price: 14.99,
      originalPrice: 24.99,
      format: 'PDF',
      pages: 156,
      rating: 4.6,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=300&fit=crop',
    },
    {
      id: 102,
      title: 'Vocabulary Builder Pro',
      description: 'Advanced vocabulary for academic and professional contexts.',
      price: 12.99,
      originalPrice: 19.99,
      format: 'PDF + Audio',
      pages: 203,
      rating: 4.8,
      reviews: 215,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop',
    },
    {
      id: 103,
      title: 'Writing Excellence Guide',
      description: 'Master essay writing, technical writing, and creative composition.',
      price: 16.99,
      originalPrice: 29.99,
      format: 'PDF + Templates',
      pages: 278,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=300&fit=crop',
    },
  ];

  const stats = [
    { icon: Users, label: 'Active Students', value: '50K+' },
    { icon: Award, label: 'Success Rate', value: '92%' },
    { icon: BookOpen, label: 'Courses & Books', value: '25+' },
    { icon: Zap, label: 'Lifetime Access', value: '100%' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">EnglishPro</span>
          </div>
          <Button variant="outline" className="gap-2">
            <ShoppingCart className="w-4 h-4" />
            Cart
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Master English with Expert-Led Courses & Resources
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Unlock your potential with comprehensive courses and ebooks designed by language experts. From fundamentals to advanced proficiency.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  Explore Courses
                </Button>
                <Button size="lg" variant="outline">
                  Browse Ebooks
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516534775068-bb57e39c1a1d?w=600&h=400&fit=crop"
                alt="Learning English"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-3">Featured Courses</h2>
            <p className="text-muted-foreground text-lg">Structured learning paths taught by certified instructors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {course.level}
                    </span>
                    <span className="text-xs text-muted-foreground">{course.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {course.rating} ({course.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-2xl font-bold">${course.price}</p>
                      <p className="text-sm text-muted-foreground line-through">
                        ${course.originalPrice}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">{course.students.toLocaleString()} students</span>
                  </div>

                  <Button className="w-full gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ebooks Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-3">Digital Resources</h2>
            <p className="text-muted-foreground text-lg">Instant access to comprehensive ebooks and study guides</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <div
                key={ebook.id}
                className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {ebook.format}
                    </span>
                    <span className="text-xs text-muted-foreground">{ebook.pages} pages</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{ebook.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{ebook.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {ebook.rating} ({ebook.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-2xl font-bold">${ebook.price}</p>
                      <p className="text-sm text-muted-foreground line-through">
                        ${ebook.originalPrice}
                      </p>
                    </div>
                  </div>

                  <Button className="w-full gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your English?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of learners who have achieved their language goals with our courses and resources.
          </p>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About EnglishPro</h4>
              <p className="text-sm text-muted-foreground">
                Empowering learners worldwide with quality English education.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Beginner</a></li>
                <li><a href="#" className="hover:text-foreground">Intermediate</a></li>
                <li><a href="#" className="hover:text-foreground">Advanced</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Ebooks</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 EnglishPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

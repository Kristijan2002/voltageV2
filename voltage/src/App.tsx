import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Zap, Wrench, Lightbulb, Power, Cable, Settings, ArrowRight, Award, Shield, CheckCircle, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -75]);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', updateScrollY);
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body with form data
    const subject = `Povpraševanje za električne storitve - ${formData.name}`;
    const body = `Spoštovani,

ime in priimek: ${formData.name}
E-mail: ${formData.email}
Telefon: ${formData.phone || 'Ni navedeno'}

Sporočilo:
${formData.message}

--
To sporočilo je bilo poslano preko kontaktnega obrazca na spletni strani Voltage.`;

    // Create mailto link
    const mailtoLink = `mailto:maksimovskikristijan70@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message and reset form
    alert('Odpiral se bo vaš e-mail program s pripravljenim sporočilom. Prosimo, pošljite e-mail za dokončanje povpraševanja.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Servis in vzdrževanje",
      description: "Profesionalen servis električnih naprav in redni pregledi električnih instalacij"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Odpravljanje okvar",
      description: "Hitra in učinkovita diagnostika ter odpravljanje električnih okvar"
    },
    {
      icon: <Cable className="h-8 w-8" />,
      title: "Nove električne instalacije",
      description: "Projektiranje in izvedba novih električnih instalacij za stanovanjske in poslovne objekte"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Montaža razsvetljave",
      description: "Strokovska montaža različnih vrst razsvetljave in svetlobnih sistemov"
    },
    {
      icon: <Power className="h-8 w-8" />,
      title: "Zamenjava vtičnic in stikal",
      description: "Hitro in strokovno nameščanje novih vtičnic, stikal in drugih električnih komponent"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Električne meritve",
      description: "Natančne meritve električnih instalacij in izdaja poročil o ustreznosti"
    }
  ];

  const faqs = [
    {
      question: "Kako hitro lahko pridete na ogled?",
      answer: "Običajno lahko zagotovimo ogled v roku 24-48 ur od vašega klica. V nujnih primerih pa se trudimo priti čim prej, tudi isti dan."
    },
    {
      question: "Ali izdajate račune za storitve?",
      answer: "Da, za vse opravljene storitve izdajamo račune v skladu z veljavno zakonodajo. Omogočamo tudi plačilo preko bančnih kartic."
    },
    {
      question: "Kakšne so vaše cene?",
      answer: "Cene so odvisne od obsega in zahtevnosti dela. Prva ocena je brezplačna, nato pa vam izdelamo podrobno ponudbo. Delovno uro zaračunavamo 35-45 EUR, odvisno od zahtevnosti."
    },
    {
      question: "Ali imate certifikate za elektroinštalacije?",
      answer: "Da, imamo vsa potrebna dovoljenja in certifikate za izvajanje električnih del. Vsi naši elektroinštalaterji so usposobljeni in licencirani."
    },
    {
      question: "Ali nudite garancijo na storitve?",
      answer: "Na vsa naša dela dajemo 2-letno garancijo. Za vgrajene materiale velja garancija proizvajalca, ki je običajno daljša."
    },
    {
      question: "Delate tudi vikende?",
      answer: "Za nujne primere smo dosegljivi tudi vikende in praznike. Za redne storitve pa delamo od ponedeljka do petka, 7:00-17:00."
    },
    {
      question: "Ali potrebujem dovoljenje za elektroinštalacije?",
      answer: "Za večje posege je potrebno pridobiti dovoljenje pristojnega organa. Mi vam z veseljem pomagamo pri pripravi potrebne dokumentacije."
    },
    {
      question: "Kako dolgo traja tipična instalacija?",
      answer: "Manjše storitve (zamenjava vtičnic, stikal) opravimo v 1-2 urah. Večji posegi pa lahko trajajo od enega dne do nekaj tednov, odvisno od obsega."
    }
  ];

  const certificates = [
    {
      title: "Kvalificirani elektrikar",
      issuer: "Obrtna zbornica Slovenije",
      year: "2023",
      description: "Certifikat potrjuje strokovno usposobljenost za izvajanje električnih instalacij"
    },
    {
      title: "Varnost pri delu z elektriko",
      issuer: "Ministrstvo za delo",
      year: "2024",
      description: "Certifikat za varno delo z električnimi napravami in instalacijami"
    },
    {
      title: "Energetska učinkovitost",
      issuer: "Eco Institut",
      year: "2023",
      description: "Specialno usposabljanje za energetsko učinkovite električne rešitve"
    },
    {
      title: "Pametni dom sistemi",
      issuer: "Smart Home Academy",
      year: "2024",
      description: "Certifikat za načrtovanje in vgradnjo pametnih domskih sistemov"
    },
    {
      title: "Obnovljivi viri energije",
      issuer: "Energetska agencija RS",
      year: "2023",
      description: "Usposabljanje za priključevanje sončnih elektrarn in drugih OVE"
    },
    {
      title: "Varnostni pregledi",
      issuer: "Slovenski institut za standardizacijo",
      year: "2024",
      description: "Pooblastilo za izvajanje varnostnih pregledov električnih instalacij"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden relative">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-1/3 -right-32 w-80 h-80 bg-slate-600/8 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/6 rounded-full blur-3xl"
        />
        
        {/* Minimal Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Voltage</h1>
                <p className="text-sm text-slate-400">Elektroinštalacije s.p.</p>
              </div>
            </motion.div>
            <nav className="hidden md:flex space-x-6">
              <motion.a 
                href="#home" 
                className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                Domov
              </motion.a>
              <motion.a 
                href="#services" 
                className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                Storitve
              </motion.a>
              <motion.a 
                href="#certificates" 
                className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                Certifikati
              </motion.a>
              <motion.a 
                href="#faq" 
                className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                FAQ
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                whileHover={{ y: -1 }}
              >
                Kontakt
              </motion.a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div 
            className="mb-12"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-slate-800/30 rounded-2xl mb-8 backdrop-blur-sm border border-slate-700/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="h-12 w-12 text-blue-400" />
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Voltage
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl text-blue-300 font-medium mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              "Vi si zamislite, mi izvedemo"
            </motion.div>
            
            <motion.p 
              className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Profesionalne električne storitve v Sloveniji. Z več kot 10 leti izkušenj vam zagotavljamo kakovostne in varne električne rešitve.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kontaktirajte nas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white px-8 py-4 backdrop-blur-sm"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Poglejte storitve
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ scale: 0.98 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Naše storitve
            </motion.h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ponujamo širok spekter električnih storitev za stanovanjske in poslovne objekte
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group"
              >
                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                        {service.icon}
                      </div>
                    </motion.div>
                    <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ scale: 0.98 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Certifikati in kvalifikacije
            </motion.h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Naša strokovna usposobljenost je potrjena z uradnimi certifikati in priznanji
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group"
              >
                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                      >
                        <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                          <Award className="h-6 w-6" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-white group-hover:text-blue-300 transition-colors mb-2">
                          {cert.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Shield className="h-4 w-4" />
                            <span>{cert.issuer}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{cert.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed">
                      {cert.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center space-x-2 text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Verificiran certifikat</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ scale: 0.98 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Pogosto zastavljena vprašanja
            </motion.h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Odgovori na najpogostejša vprašanja o naših storitvah
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-slate-700/50">
                      <AccordionTrigger className="text-white hover:text-blue-300 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kontaktirajte nas
            </h2>
            <p className="text-lg text-slate-300">
              Imate vprašanje ali potrebujete ponudbo? Pošljite nam sporočilo in odgovorili vam bomo v najkrajšem času.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-center text-white">Pošljite povpraševanje</CardTitle>
                <CardDescription className="text-center text-slate-300">
                  Izpolnite spodnji obrazec in kmalu se bomo z vami povezali
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">Ime in priimek *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Vnesite vaše ime"
                        className="bg-slate-700/40 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-300">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+386 XX XXX XXX"
                        className="bg-slate-700/40 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="vasa.email@example.com"
                      className="bg-slate-700/40 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300">Sporočilo *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Opišite vašo potrebo ali vprašanje..."
                      className="min-h-[120px] bg-slate-700/40 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 py-3"
                    >
                      Pošlji sporočilo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/30 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">Voltage</h3>
          </div>
          <p className="text-slate-400 mb-4">
            Profesionalne električne storitve v Sloveniji
          </p>
          <div className="h-px w-24 bg-slate-600 mx-auto mb-4" />
          <p className="text-sm text-slate-500">
            © 2025 Voltage Elektroinštalacije s.p. Vse pravice pridržane.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
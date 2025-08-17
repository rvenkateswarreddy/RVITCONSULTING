'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState } from 'react';

// Firebase imports
import {  collection, addDoc } from 'firebase/firestore';
import {  ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import {db, storage} from '../../../FirebaseConfig'
// Firebase config (replace with your actual config)


const CareersPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // State for Job Posting & Resume Submission
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      type: "Full-time",
      location: "Remote",
      department: "Artificial Intelligence",
      description: "Lead cutting-edge AI projects for Fortune 500 clients",
      skills: ["Python", "TensorFlow", "NLP", "Computer Vision"],
      perks: ["Stock options", "Flex hours", "Annual tech budget"]
    },
    {
      title: "Cloud Architect",
      type: "Full-time",
      location: "Hybrid (NYC)",
      department: "Cloud Solutions",
      description: "Design enterprise cloud infrastructure for global clients",
      skills: ["AWS", "Azure", "Terraform", "Kubernetes"],
      perks: ["Certification sponsorship", "Profit sharing", "Global conferences"]
    },
    {
      title: "Cybersecurity Specialist",
      type: "Contract",
      location: "Remote",
      department: "Security",
      description: "Protect client systems with advanced security measures",
      skills: ["Pen Testing", "SIEM", "CISSP", "GDPR"],
      perks: ["Hackathon sponsorship", "Security lab access", "Bug bounty bonuses"]
    },
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Bengaluru",
      department: "Software Engineering",
      description: "Build scalable web applications for diverse industries",
      skills: ["React", "Node.js", "GraphQL", "TypeScript"],
      perks: ["Remote work options", "Skill development budget", "Startup culture"]
    },
    {
      title: "Data Scientist",
      type: "Full-time",
      location: "Remote",
      department: "Data Analytics",
      description: "Transform raw data into actionable business insights",
      skills: ["Python", "SQL", "Tableau", "Machine Learning"],
      perks: ["Research publication support", "Conference attendance", "Elite client projects"]
    },
    {
      title: "DevOps Engineer",
      type: "Contract-to-Hire",
      location: "Hybrid (London)",
      department: "Engineering",
      description: "Optimize CI/CD pipelines for high-availability systems",
      skills: ["Docker", "Jenkins", "Ansible", "Prometheus"],
      perks: ["AWS/GCP credits", "Home lab stipend", "Tech gadget allowance"]
    }
  ];

  const perks = [
    {
      title: "Competitive Compensation",
      icon: "💰",
      description: "Top-tier salaries with performance bonuses"
    },
    {
      title: "Flexible Work",
      icon: "🏡",
      description: "Remote options and flexible schedules"
    },
    {
      title: "Career Growth",
      icon: "📈",
      description: "Clear promotion paths and mentorship"
    },
    {
      title: "Learning Budget",
      icon: "🎓",
      description: "$5,000 annual budget for certifications"
    },
    {
      title: "Cutting-Edge Tech",
      icon: "💻",
      description: "Work with the latest tools and frameworks"
    },
    {
      title: "Global Impact",
      icon: "🌎",
      description: "Projects that transform industries worldwide"
    }
  ];

  // Resume submission handler
  const handleResumeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile || !name || !email || !selectedJob) return;
    setLoading(true);

    try {
      // Upload resume to Firebase Storage
      const fileRef = storageRef(storage, `resumes/${Date.now()}_${resumeFile.name}`);
      await uploadBytes(fileRef, resumeFile);
      const url = await getDownloadURL(fileRef);

      // Save application data to Firestore
      await addDoc(collection(db, 'jobApplications'), {
        name,
        email,
        job: selectedJob,
        resumeUrl: url,
        appliedAt: new Date().toISOString(),
      });

      setSubmissionSuccess(true);
      setResumeFile(null);
      setName('');
      setEmail('');
      setSelectedJob(null);
      setLoading(false);
    } catch (err) {
      alert('Submission failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/careers.webp')]"></div>
        {/* Hero Image */}
        <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/careers.webp"
            alt="Career Hero"
            fill
            style={{ objectFit: 'cover', opacity: 0.18 }}
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Build Your <span className="text-cyan-400">Dream Career</span> in Tech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-8"
          >
            Join RV IT Consulting and work on transformative projects with global impact
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors shadow-lg mr-4" onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}>
              View Open Positions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why <span className="text-blue-600">RV IT</span> Stands Out
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are not just employers - we are career accelerators in the tech industry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="text-4xl mb-6">{perk.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{perk.title}</h3>
              <p className="text-gray-600">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Openings */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="openings">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Current <span className="text-blue-600">Opportunities</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore roles where you can grow and make an impact
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.location}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                      onClick={() => setSelectedJob(job.title)}
                    >
                      Apply Now
                    </button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Skills</h4>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Perks & Benefits</h4>
                    <div className="flex flex-wrap gap-3">
                      {job.perks.map((perk, i) => (
                        <span key={i} className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm border border-green-100">
                          {perk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 mb-6">
              Do not see your perfect role? We are always looking for exceptional talent
            </p>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition-colors"
              onClick={() => setSelectedJob('General Application')}
            >
              Submit General Application
            </button>
          </div>
        </div>
      </section>

      {/* Resume Submission Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <form
            className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative"
            onSubmit={handleResumeSubmit}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => { setSelectedJob(null); setSubmissionSuccess(false); }}
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              Apply for: {selectedJob}
            </h3>
            {!submissionSuccess ? (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" required className="w-full px-3 py-2 border rounded" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" required className="w-full px-3 py-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Resume (PDF, DOCX)</label>
                  <input type="file" required accept=".pdf,.doc,.docx" onChange={e => setResumeFile(e.target.files?.[0] || null)} />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </>
            ) : (
              <div className="text-green-700 text-center font-semibold py-8">
                🎉 Thank you! Your application has been submitted.
              </div>
            )}
          </form>
        </div>
      )}

      {/* Hiring Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-blue-600">Hiring Process</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent steps to join our team
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-4 mx-auto">1</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Application Review</h3>
              <p className="text-gray-600">We review your profile within 48 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-4 mx-auto">2</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Technical Screen</h3>
              <p className="text-gray-600">1-hour skills assessment with our team</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-4 mx-auto">3</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Team Interview</h3>
              <p className="text-gray-600">Meet your potential colleagues and managers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-4 mx-auto">4</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Offer & Onboarding</h3>
              <p className="text-gray-600">Welcome to the team with full support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join a team that values innovation, growth, and impact
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}
            >
              Browse All Positions
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
              Contact Recruiter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
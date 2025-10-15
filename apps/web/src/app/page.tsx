'use client'

import { useState } from 'react'
import { Button, Card, Input, Badge, Alert, Modal } from '@anchor/ui'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = () => {
    if (email) {
      setShowAlert(true)
      setShowModal(false)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Anchor</h1>
              <Badge variant="info" className="ml-3">v1.0</Badge>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">Dashboard</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Projects</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Team</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Settings</a>
            </nav>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Anchor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A modern, cross-platform application built with Next.js and React Native. 
            Experience seamless functionality across web and mobile devices.
          </p>
        </div>

        {/* Alert */}
        {showAlert && (
          <div className="mb-8">
            <Alert
              variant="success"
              title="Success!"
              onClose={() => setShowAlert(false)}
            >
              Thank you for your interest! We'll be in touch soon.
            </Alert>
          </div>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card title="Cross-Platform" hover>
            <p className="text-gray-600">
              Built with shared components that work seamlessly across web and mobile platforms.
            </p>
            <div className="mt-4">
              <Badge variant="success">Web Ready</Badge>
              <Badge variant="info" className="ml-2">Mobile Ready</Badge>
            </div>
          </Card>

          <Card title="Modern UI" hover>
            <p className="text-gray-600">
              Beautiful, responsive design with Tailwind CSS and custom components.
            </p>
            <div className="mt-4">
              <Badge variant="warning">Responsive</Badge>
              <Badge variant="default" className="ml-2">Accessible</Badge>
            </div>
          </Card>

          <Card title="Developer Friendly" hover>
            <p className="text-gray-600">
              Built with TypeScript, modern tooling, and best practices.
            </p>
            <div className="mt-4">
              <Badge variant="info">TypeScript</Badge>
              <Badge variant="default" className="ml-2">Monorepo</Badge>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Code Reuse</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2</div>
              <div className="text-gray-600">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">7+</div>
              <div className="text-gray-600">Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">∞</div>
              <div className="text-gray-600">Possibilities</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 mb-8">
            Join thousands of developers building amazing cross-platform applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="primary" size="lg" onClick={() => setShowModal(true)}>
              Start Building
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </main>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Get Started with Anchor"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Enter your email to receive updates and get started with Anchor.
          </p>
          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={setEmail}
            required
            fullWidth
          />
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="ghost" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Subscribe
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}


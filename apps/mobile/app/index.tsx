import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { MobileButton, MobileInput, MobileCard } from '@anchor/ui/mobile'

export default function Index() {
  const [email, setEmail] = useState('')
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = () => {
    if (email) {
      Alert.alert(
        'Success!',
        'Thank you for your interest! We\'ll be in touch soon.',
        [{ text: 'OK', onPress: () => {
          setEmail('')
          setShowForm(false)
        }}]
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Anchor</Text>
          <Text style={styles.version}>v1.0</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Welcome to Anchor</Text>
          <Text style={styles.heroSubtitle}>
            A modern, cross-platform application built with Next.js and React Native. 
            Experience seamless functionality across web and mobile devices.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <MobileCard title="Cross-Platform" style={styles.card}>
            <Text style={styles.cardText}>
              Built with shared components that work seamlessly across web and mobile platforms.
            </Text>
            <View style={styles.badgeContainer}>
              <View style={[styles.badge, styles.successBadge]}>
                <Text style={styles.badgeText}>Web Ready</Text>
              </View>
              <View style={[styles.badge, styles.infoBadge]}>
                <Text style={styles.badgeText}>Mobile Ready</Text>
              </View>
            </View>
          </MobileCard>

          <MobileCard title="Modern UI" style={styles.card}>
            <Text style={styles.cardText}>
              Beautiful, responsive design with custom components and native styling.
            </Text>
            <View style={styles.badgeContainer}>
              <View style={[styles.badge, styles.warningBadge]}>
                <Text style={styles.badgeText}>Responsive</Text>
              </View>
              <View style={[styles.badge, styles.defaultBadge]}>
                <Text style={styles.badgeText}>Accessible</Text>
              </View>
            </View>
          </MobileCard>

          <MobileCard title="Developer Friendly" style={styles.card}>
            <Text style={styles.cardText}>
              Built with TypeScript, modern tooling, and best practices.
            </Text>
            <View style={styles.badgeContainer}>
              <View style={[styles.badge, styles.infoBadge]}>
                <Text style={styles.badgeText}>TypeScript</Text>
              </View>
              <View style={[styles.badge, styles.defaultBadge]}>
                <Text style={styles.badgeText}>Monorepo</Text>
              </View>
            </View>
          </MobileCard>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Platform Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: '#3b82f6' }]}>100%</Text>
              <Text style={styles.statLabel}>Code Reuse</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: '#10b981' }]}>2</Text>
              <Text style={styles.statLabel}>Platforms</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: '#8b5cf6' }]}>7+</Text>
              <Text style={styles.statLabel}>Components</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: '#f59e0b' }]}>∞</Text>
              <Text style={styles.statLabel}>Possibilities</Text>
            </View>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaTitle}>Ready to get started?</Text>
          <Text style={styles.ctaSubtitle}>
            Join thousands of developers building amazing cross-platform applications.
          </Text>
          <View style={styles.buttonContainer}>
            <MobileButton
              variant="primary"
              size="lg"
              onPress={() => setShowForm(true)}
              style={styles.primaryButton}
            >
              Start Building
            </MobileButton>
            <MobileButton
              variant="outline"
              size="lg"
              style={styles.secondaryButton}
            >
              View Documentation
            </MobileButton>
          </View>
        </View>

        {/* Form Modal */}
        {showForm && (
          <View style={styles.modalOverlay}>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Get Started with Anchor</Text>
              <Text style={styles.modalSubtitle}>
                Enter your email to receive updates and get started with Anchor.
              </Text>
              <MobileInput
                label="Email Address"
                placeholder="your@email.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                fullWidth
                style={styles.input}
              />
              <View style={styles.modalButtons}>
                <MobileButton
                  variant="ghost"
                  onPress={() => setShowForm(false)}
                  style={styles.modalButton}
                >
                  Cancel
                </MobileButton>
                <MobileButton
                  variant="primary"
                  onPress={handleSubmit}
                  style={styles.modalButton}
                >
                  Subscribe
                </MobileButton>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  version: {
    fontSize: 14,
    color: '#3b82f6',
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 8,
  },
  hero: {
    padding: 24,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  featuresContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 22,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  successBadge: {
    backgroundColor: '#d1fae5',
  },
  infoBadge: {
    backgroundColor: '#dbeafe',
  },
  warningBadge: {
    backgroundColor: '#fef3c7',
  },
  defaultBadge: {
    backgroundColor: '#f3f4f6',
  },
  statsContainer: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    marginBottom: 16,
    minWidth: '45%',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  ctaContainer: {
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    marginBottom: 12,
  },
  secondaryButton: {
    marginBottom: 12,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
    lineHeight: 22,
  },
  input: {
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  modalButton: {
    minWidth: 80,
  },
})


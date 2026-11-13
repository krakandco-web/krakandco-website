"use client";

import React, { useState } from "react";
import {
  Button,
  IconButton,
  Badge,
  Separator,
  DisplayHeading,
  PageHeading,
  SectionHeadingText,
  Text,
  Caption,
  Spinner,
  Skeleton,
  Modal,
  Drawer,
  Accordion,
  Tabs,
  Tooltip,
} from "@/components/ui";
import {
  Input,
  Select,
  Checkbox,
  RadioGroup,
  Textarea,
  FormField,
  ValidationMessage,
} from "@/components/forms";
import {
  ProductCard,
  ProductPrice,
  ProductRating,
  ProductBadge,
  QuantitySelector,
  VariantSelector,
} from "@/components/product";
import {
  CategoryCard,
  CollectionCard,
  PromotionalCard,
} from "@/components/collection";
import {
  ToastProvider,
  useToast,
  EmptyState,
  ErrorState,
  SuccessState,
} from "@/components/feedback";
import {
  Container,
  SectionHeading,
  Breadcrumb,
  Pagination,
  PriceDisplay,
} from "@/components/common";
import { MOCK_PRODUCTS } from "@/data/mock/products";
import { Heart, Search, ShoppingBag, Bell, Info } from "lucide-react";

function ComponentPreviewContent() {
  const { showToast } = useToast();

  // Overlay states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Form states
  const [inputText, setInputText] = useState("");
  const [selectVal, setSelectVal] = useState("tn");
  const [checkedVal, setCheckedVal] = useState(true);
  const [radioVal, setRadioVal] = useState("upi");
  const [textareaVal, setTextareaVal] = useState("");

  // Product interaction states
  const [testQty, setTestQty] = useState(2);
  const sampleProduct = MOCK_PRODUCTS[0]; // Kerala Banana Chips
  const sampleProduct2 = MOCK_PRODUCTS[1]; // Madurai Mixture
  const [selectedVariant, setSelectedVariant] = useState(
    sampleProduct.variants[1] || sampleProduct.variants[0]
  );
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="min-h-screen bg-surface-canvas py-10 text-text-primary">
      <Container size="xl">
        {/* Dev Environment Watermark */}
        <div className="mb-8 rounded-xl border border-brand-mustard/60 bg-brand-mustard/20 p-4 text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-maroon-dark">
            [INTERNAL DEVELOPMENT WORKBENCH] — KRAK &amp; CO. Component Library Preview (Phase 08)
          </span>
          <p className="mt-1 text-xs text-text-secondary">
            Live interactive review surface for all design system primitives, form controls, product cards, overlays, and feedback modules.
          </p>
        </div>

        <div className="space-y-16">
          {/* SECTION 1: BUTTONS & ACTION CONTROLS */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              1. Button &amp; Icon Button Primitives
            </h2>

            <div className="space-y-6">
              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Button Variants</Caption>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary Action</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="text">Text Link Style</Button>
                </div>
              </div>

              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Button Sizes</Caption>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="xs" variant="primary">Extra Small (xs)</Button>
                  <Button size="sm" variant="primary">Small (sm)</Button>
                  <Button size="md" variant="primary">Medium (md)</Button>
                  <Button size="lg" variant="primary">Large (lg)</Button>
                </div>
              </div>

              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">States &amp; Icons</Caption>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" leftIcon={<ShoppingBag className="h-4 w-4" />}>
                    Add to Cart
                  </Button>
                  <Button variant="secondary" rightIcon={<Heart className="h-4 w-4" />}>
                    Save to Wishlist
                  </Button>
                  <Button variant="primary" isLoading>
                    Processing
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled Button
                  </Button>
                </div>
              </div>

              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Icon Buttons</Caption>
                <div className="flex flex-wrap items-center gap-3">
                  <IconButton icon={<Heart className="h-4 w-4" />} aria-label="Favorite" variant="outline" size="sm" />
                  <IconButton icon={<Search className="h-5 w-5" />} aria-label="Search" variant="primary" size="md" />
                  <IconButton icon={<Bell className="h-5 w-5" />} aria-label="Notifications" variant="secondary" size="md" />
                  <IconButton icon={<Heart className="h-5 w-5" />} aria-label="Favorite" variant="ghost" size="lg" />
                  <IconButton icon={<Heart className="h-4 w-4" />} aria-label="Favorite" variant="outline" size="sm" disabled />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: BADGES & LABELS */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              2. Badge System
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="brand">Brand Badge</Badge>
              <Badge variant="secondary">Festive Special</Badge>
              <Badge variant="success">In Stock</Badge>
              <Badge variant="warning">Low Stock</Badge>
              <Badge variant="error">Sold Out</Badge>
              <Badge variant="discount">20% OFF</Badge>
              <Badge variant="new">New Harvest</Badge>
              <Badge variant="out-of-stock">Back in 2 Days</Badge>
            </div>
          </section>

          {/* SECTION 3: TYPOGRAPHY PRIMITIVES */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              3. Typography Primitives
            </h2>
            <div className="space-y-4">
              <DisplayHeading>Authentic Indian Snacks: South to North</DisplayHeading>
              <PageHeading>Traditional Recipes Handcrafted Fresh</PageHeading>
              <SectionHeadingText>Explore Regional Mixtures &amp; Savouries</SectionHeadingText>
              <Text size="lg">
                Lead body text introducing our artisanal heritage, pure cold-pressed coconut oil, and small-batch roasting methods.
              </Text>
              <Text size="base">
                Standard body copy ensuring high legibility with 1.6 line height and contrast compliant with WCAG 2.2 AA standards.
              </Text>
              <Caption>Caption text for packaging dates, expiry notices, and regulatory disclaimers.</Caption>
            </div>
          </section>

          {/* SECTION 4: FORM CONTROLS */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              4. Form Components &amp; Validation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Full Customer Name"
                required
                helperText="As printed on your delivery address"
              >
                <Input
                  placeholder="e.g. Dhyanesh Raman"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onClear={() => setInputText("")}
                />
              </FormField>

              <FormField
                label="PIN Code (Postal Code)"
                required
                errorMessage={inputText === "000000" ? "Invalid Indian postal code." : undefined}
                helperText="Enter 6-digit PIN to check delivery SLA"
              >
                <Input
                  placeholder="641004"
                  leftIcon={<Search className="h-4 w-4" />}
                  isError={inputText === "000000"}
                />
              </FormField>

              <FormField label="Delivery Region" required>
                <Select
                  value={selectVal}
                  onChange={(e) => setSelectVal(e.target.value)}
                  options={[
                    { value: "tn", label: "Tamil Nadu (Coimbatore / Chennai)" },
                    { value: "kl", label: "Kerala (Kochi / Calicut)" },
                    { value: "ka", label: "Karnataka (Bengaluru / Mysuru)" },
                    { value: "mh", label: "Maharashtra (Mumbai / Pune)" },
                    { value: "dl", label: "Delhi NCR" },
                  ]}
                />
              </FormField>

              <FormField label="Delivery Instructions">
                <Textarea
                  placeholder="Leave at security gate or ring doorbell twice..."
                  value={textareaVal}
                  onChange={(e) => setTextareaVal(e.target.value)}
                  maxLength={150}
                  currentLength={textareaVal.length}
                />
              </FormField>
            </div>

            <div className="mt-6 pt-6 border-t border-surface-sand space-y-4">
              <div>
                <Checkbox
                  label="Subscribe to weekly festive snack drops &amp; private discounts"
                  description="Zero spam. Unsubscribe anytime."
                  checked={checkedVal}
                  onChange={(e) => setCheckedVal(e.target.checked)}
                />
              </div>

              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Payment Method Selection</Caption>
                <RadioGroup
                  name="previewPayment"
                  value={radioVal}
                  onChange={setRadioVal}
                  options={[
                    {
                      value: "upi",
                      label: "Instant UPI (GPay, PhonePe, Paytm)",
                      description: "Zero transaction fees, 1-click confirmation",
                      badge: <Badge variant="success" size="sm">Recommended</Badge>,
                    },
                    {
                      value: "card",
                      label: "Credit / Debit Card",
                      description: "Visa, Mastercard, RuPay, Amex accepted",
                    },
                    {
                      value: "cod",
                      label: "Cash on Delivery",
                      description: "₹40 convenience handling fee applies",
                    },
                  ]}
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <ValidationMessage type="error" message="Delivery not serviceable for entered PIN code." />
                <ValidationMessage type="success" message="Free Express Shipping unlocked on this order!" />
                <ValidationMessage type="warning" message="Only 3 units remaining in local hub." />
                <ValidationMessage type="info" message="Orders placed before 2 PM dispatch same day." />
              </div>
            </div>
          </section>

          {/* SECTION 5: PRODUCT COMPONENTS */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              5. Product Components &amp; Product Cards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product Card 1 */}
              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Product Card — Normal</Caption>
                <ProductCard
                  product={sampleProduct}
                  isWishlisted={isWishlisted}
                  onToggleWishlist={() => {
                    setIsWishlisted(!isWishlisted);
                    showToast({
                      type: "success",
                      title: isWishlisted ? "Removed from Wishlist" : "Saved to Wishlist",
                      description: sampleProduct.name,
                    });
                  }}
                  onAddToCart={(prod, variant, qty) => {
                    showToast({
                      type: "success",
                      title: "Added to Cart!",
                      description: `${qty}x ${prod.name} (${variant.packSize})`,
                    });
                  }}
                />
              </div>

              {/* Product Card 2 */}
              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Product Card — Bestseller</Caption>
                <ProductCard
                  product={sampleProduct2}
                  onAddToCart={(prod, variant, qty) => {
                    showToast({
                      type: "success",
                      title: "Added to Cart!",
                      description: `${qty}x ${prod.name} (${variant.packSize})`,
                    });
                  }}
                />
              </div>

              {/* Interactive Variant & Quantity Controls */}
              <div className="flex flex-col justify-between rounded-2xl border border-surface-sand p-4 bg-surface-parchment/40">
                <div>
                  <h4 className="font-display text-lg font-bold text-brand-maroon">
                    Interactive PDP Micro-Controls
                  </h4>
                  <div className="mt-4">
                    <Caption className="block mb-1.5 font-bold">Pack Size Selector</Caption>
                    <VariantSelector
                      variants={sampleProduct.variants}
                      selectedVariantId={selectedVariant.id}
                      onSelectVariant={setSelectedVariant}
                    />
                  </div>

                  <div className="mt-4">
                    <Caption className="block mb-1.5 font-bold">Dynamic Price Display</Caption>
                    <ProductPrice
                      price={selectedVariant.price}
                      compareAtPrice={selectedVariant.compareAtPrice}
                      size="lg"
                    />
                  </div>

                  <div className="mt-4">
                    <Caption className="block mb-1.5 font-bold">Quantity Stepper</Caption>
                    <QuantitySelector
                      quantity={testQty}
                      onChange={setTestQty}
                      min={1}
                      max={10}
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-sand">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => {
                      showToast({
                        type: "success",
                        title: "Custom Quantity Added",
                        description: `${testQty}x ${sampleProduct.name} (${selectedVariant.packSize})`,
                      });
                    }}
                  >
                    Add {testQty} to Cart
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: COLLECTION & PROMOTIONAL CARDS */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              6. Collection &amp; Promotional Cards
            </h2>

            <div className="space-y-8">
              <div>
                <Caption className="block mb-3 font-bold uppercase tracking-wider">Circular Category Cards</Caption>
                <div className="flex flex-wrap items-center justify-around gap-4">
                  <CategoryCard
                    title="Chips &amp; Crisps"
                    slug="chips-crisps"
                    imageUrl="/assets/products/placeholder-banana-chips.svg"
                    itemCount={4}
                  />
                  <CategoryCard
                    title="Mixtures"
                    slug="mixtures"
                    imageUrl="/assets/products/placeholder-madurai-mixture.svg"
                    itemCount={5}
                  />
                  <CategoryCard
                    title="Savouries"
                    slug="savouries"
                    imageUrl="/assets/products/placeholder-aloo-bhujia.svg"
                    itemCount={6}
                  />
                  <CategoryCard
                    title="Sweets &amp; Mithai"
                    slug="sweets-mithai"
                    imageUrl="/assets/products/placeholder-kaju-katli.svg"
                    itemCount={3}
                  />
                  <CategoryCard
                    title="Gift Boxes"
                    slug="gift-boxes"
                    imageUrl="/assets/products/placeholder-gift-box.svg"
                    itemCount={2}
                  />
                </div>
              </div>

              <div>
                <Caption className="block mb-3 font-bold uppercase tracking-wider">Regional Collection Cards</Caption>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CollectionCard
                    title="South Indian Classics"
                    subtitle="From Tamil Nadu, Kerala, Karnataka &amp; beyond. Fried in pure coconut oil."
                    slug="south-indian"
                    theme="forest"
                    ctaText="Explore South Indian →"
                    illustrationUrl="/assets/illustrations/south-indian/illustration-gopuram.svg"
                  />
                  <CollectionCard
                    title="North Indian Favourites"
                    subtitle="Iconic snacks from Delhi, Punjab, Rajasthan &amp; more. Rich spices and royal sev."
                    slug="north-indian"
                    theme="maroon"
                    ctaText="Explore North Indian →"
                    illustrationUrl="/assets/illustrations/north-indian/illustration-monument.svg"
                  />
                </div>
              </div>

              <div>
                <Caption className="block mb-3 font-bold uppercase tracking-wider">Promotional Highlight Card</Caption>
                <PromotionalCard
                  eyebrow="Festive Season 2026"
                  title="Curated Gift Boxes &amp; Hampers"
                  description="Handcrafted assortments packaged in luxury gold-embossed keepsake tins. Perfect for corporate gifting, weddings, and Diwali celebrations."
                  ctaText="Explore Gift Boxes"
                  ctaHref="/gift-boxes"
                  imageUrl="/assets/products/placeholder-gift-box.svg"
                  badgeText="Complimentary Card"
                />
              </div>
            </div>
          </section>

          {/* SECTION 7: INTERACTIVE OVERLAYS */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              7. Interactive Overlays (Modal, Drawer, Accordion, Tabs, Tooltip)
            </h2>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                  Open Sample Modal Dialog
                </Button>
                <Button variant="secondary" onClick={() => setIsDrawerOpen(true)}>
                  Open Slide-Over Drawer
                </Button>

                <Tooltip content="Pure cold-pressed oil ensures zero trans fats.">
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-maroon underline underline-offset-4">
                    <Info className="h-4 w-4" />
                    <span>Hover or Focus for Tooltip</span>
                  </button>
                </Tooltip>
              </div>

              {/* Accordion Demonstration */}
              <div className="pt-4">
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Accordion Module</Caption>
                <Accordion
                  items={[
                    {
                      id: "faq-oil",
                      title: "What oil do you use for Kerala Banana Chips?",
                      content:
                        "We fry our Kerala banana chips exclusively in 100% pure cold-pressed coconut oil sourced directly from farmers in Thrissur and Kozhikode. No palm oil or blended oils are ever used.",
                    },
                    {
                      id: "faq-freshness",
                      title: "How do you guarantee freshness during pan-India transit?",
                      content:
                        "Every batch is packaged in airtight, 3-ply nitrogen-flushed pouches immediately after reaching room temperature. This protects crispness for up to 90 days without artificial preservatives.",
                    },
                    {
                      id: "faq-shipping",
                      title: "What is the Free Shipping threshold?",
                      content:
                        "All orders of ₹499 or more qualify for 100% Free Shipping anywhere across India. Orders below ₹499 carry a flat ₹49 standard shipping rate.",
                    },
                  ]}
                />
              </div>

              {/* Tabs Demonstration */}
              <div className="pt-4">
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Tabs Module</Caption>
                <Tabs
                  tabs={[
                    {
                      id: "ingredients",
                      label: "Ingredients & Sourcing",
                      content: (
                        <p className="text-sm text-text-secondary leading-relaxed">
                          Nendran Raw Bananas, Pure Cold-Pressed Coconut Oil, Turmeric Powder, Hand-Harvested Rock Salt (Sendha Namak). Zero preservatives, zero palm oil.
                        </p>
                      ),
                    },
                    {
                      id: "nutrition",
                      label: "Nutritional Facts",
                      count: 4,
                      content: (
                        <p className="text-sm text-text-secondary leading-relaxed">
                          Per 100g serving: Energy 530 kcal, Protein 3.2g, Carbohydrates 58g (of which Sugars 1.1g), Total Fat 32g (Saturated Fat 28g, Trans Fat 0g), Sodium 280mg.
                        </p>
                      ),
                    },
                    {
                      id: "storage",
                      label: "Storage & Shelf Life",
                      content: (
                        <p className="text-sm text-text-secondary leading-relaxed">
                          Store in a cool, dry place away from direct sunlight. Once opened, transfer contents into an airtight tin or jar to maintain peak crunch. Best before 90 days.
                        </p>
                      ),
                    },
                  ]}
                />
              </div>
            </div>

            {/* Modal Instance */}
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Nutritional Breakdown & Quality Assurance"
              description="Lab-certified testing report for batch #KB-2026-09"
            >
              <div className="space-y-4">
                <p className="text-xs text-text-secondary leading-relaxed">
                  Every batch of KRAK &amp; CO. snacks is prepared in an FSSAI-certified kitchen adhering to strict temperature controls and periodic oil purity evaluations.
                </p>
                <div className="rounded-xl bg-surface-canvas p-4 border border-surface-sand text-xs space-y-2">
                  <div className="flex justify-between font-semibold">
                    <span>Trans Fat:</span>
                    <span className="text-brand-forest">0.0 g (100% Free)</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Cholesterol:</span>
                    <span className="text-brand-forest">0.0 mg</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Artificial Colors:</span>
                    <span className="text-brand-forest">None (Pure Turmeric)</span>
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <Button variant="primary" size="sm" onClick={() => setIsModalOpen(false)}>
                    Got it, thanks!
                  </Button>
                </div>
              </div>
            </Modal>

            {/* Drawer Instance */}
            <Drawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              title="Cart Slide-Over Preview"
              description="Reusable drawer foundation (Phase 08)"
              footer={
                <Button variant="primary" fullWidth onClick={() => setIsDrawerOpen(false)}>
                  Continue to Checkout →
                </Button>
              }
            >
              <div className="space-y-4 py-2">
                <p className="text-xs text-text-secondary leading-relaxed">
                  This demonstrates the reusable drawer primitive handling focus trap, backdrop blur, Escape key dismissal, and scroll lock.
                </p>
                <div className="rounded-xl border border-surface-sand p-3 bg-surface-parchment/60 text-xs">
                  <span className="font-bold text-brand-maroon">Free Shipping Tracker</span>
                  <p className="text-text-muted mt-1">₹427 of ₹499 unlocked (Add ₹72 more for Free Delivery)</p>
                </div>
              </div>
            </Drawer>
          </section>

          {/* SECTION 8: FEEDBACK & STATE MODULES */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              8. Feedback Components &amp; State Screens
            </h2>

            <div className="space-y-8">
              {/* Toast Triggers */}
              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Toast Notifications</Caption>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      showToast({
                        type: "success",
                        title: "Discount Code Applied!",
                        description: "KRAK10 gave you 10% off your cart.",
                      })
                    }
                  >
                    Trigger Success Toast
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      showToast({
                        type: "error",
                        title: "Payment Processing Failed",
                        description: "Your card was declined. Please try UPI.",
                      })
                    }
                  >
                    Trigger Error Toast
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      showToast({
                        type: "warning",
                        title: "Low Stock Alert",
                        description: "Only 2 tins of Kaju Katli left!",
                      })
                    }
                  >
                    Trigger Warning Toast
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      showToast({
                        type: "info",
                        title: "Fresh Batch Notice",
                        description: "New harvest banana chips just roasted.",
                      })
                    }
                  >
                    Trigger Info Toast
                  </Button>
                </div>
              </div>

              {/* Skeletons & Spinners */}
              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Loading Skeletons &amp; Spinners</Caption>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                  <div className="flex items-center gap-4">
                    <Spinner size="sm" color="brand" />
                    <Spinner size="md" color="mustard" />
                    <Spinner size="lg" color="brand" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton variant="text" className="w-full" />
                    <Skeleton variant="text" className="w-3/4" />
                    <Skeleton variant="text" className="w-1/2" />
                  </div>
                  <Skeleton variant="product-card" className="w-48" />
                </div>
              </div>

              {/* States: Empty, Error, Success */}
              <div>
                <Caption className="block mb-3 font-bold uppercase tracking-wider">Empty State Pattern</Caption>
                <EmptyState
                  icon={<ShoppingBag className="h-8 w-8" />}
                  title="Your Snack Tin is Empty"
                  description="You haven't added any crunchy savouries or authentic sweets to your cart yet."
                  primaryAction={{
                    label: "Explore Bestsellers",
                    href: "/shop",
                  }}
                  secondaryAction={{
                    label: "View Festive Combos",
                    href: "/combos",
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Caption className="block mb-2 font-bold uppercase tracking-wider">Error State Pattern</Caption>
                  <ErrorState
                    title="Failed to Load Recommendations"
                    message="We couldn't connect to the snack recommendation engine. Please check your internet connection."
                    onRetry={() => showToast({ type: "info", title: "Retrying connection..." })}
                  />
                </div>
                <div>
                  <Caption className="block mb-2 font-bold uppercase tracking-wider">Success State Pattern</Caption>
                  <SuccessState
                    title="Address Saved Successfully"
                    message="Your Coimbatore delivery address has been saved as your default shipping destination."
                    primaryAction={{ label: "Manage Addresses", href: "/account/addresses" }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 9: COMMON & SHARED CONTENT PRIMITIVES */}
          <section className="rounded-2xl border border-surface-sand bg-surface-card p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl font-bold text-brand-maroon mb-6 pb-2 border-b border-surface-sand">
              9. Common Primitives (Heading, Breadcrumb, Pagination, Price)
            </h2>

            <div className="space-y-8">
              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Section Heading Primitive</Caption>
                <SectionHeading
                  eyebrow="TASTE THE CRUNCH"
                  title="Handcrafted Savouries &amp; Mixtures"
                  subtitle="Prepared in traditional iron kadai vats using century-old regional spice blends."
                  action={{ label: "View All 12 Snacks", href: "/shop" }}
                />
              </div>

              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Breadcrumb Navigation</Caption>
                <Breadcrumb
                  items={[
                    { label: "Shop Catalog", href: "/shop" },
                    { label: "South Indian Classics", href: "/collections/south-indian" },
                    { label: "Kerala Banana Chips" },
                  ]}
                />
              </div>

              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Price Display</Caption>
                <div className="flex flex-wrap items-center gap-6">
                  <PriceDisplay amount={149} compareAtAmount={179} size="md" showTaxNote />
                  <PriceDisplay amount={899} compareAtAmount={1099} size="lg" prefix="From" />
                  <PriceDisplay amount={2199} size="xl" prefix="Hamper" />
                </div>
              </div>

              <div>
                <Caption className="block mb-2 font-bold uppercase tracking-wider">Pagination Control</Caption>
                <Pagination
                  currentPage={activePage}
                  totalPages={5}
                  onPageChange={setActivePage}
                />
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default function ComponentPreviewPage() {
  return (
    <ToastProvider>
      <ComponentPreviewContent />
    </ToastProvider>
  );
}

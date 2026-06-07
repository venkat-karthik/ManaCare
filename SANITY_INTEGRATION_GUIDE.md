# Sanity CMS Integration Guide - ManaCare Platform

## ✅ Integration Status: ACTIVE

Your Sanity CMS is now fully integrated and ready to use!

**Project ID**: `i0ueq3bg`  
**Dataset**: `production`  
**Status**: ✅ Connected

---

## 📋 Setup Completed

### Environment Variables
✅ `.env.local` created with:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=i0ueq3bg
NEXT_PUBLIC_SANITY_DATASET=production
```

### Sanity Client
✅ Client initialized in `/lib/sanity.ts`  
✅ API Version: `2023-05-03`  
✅ CDN: Enabled for fast content delivery  
✅ Error Handling: Automatic fallback to local data

---

## 🚀 How to Use Sanity

### 1. Access Your Sanity Studio

**Option A: Online Studio**
- URL: `https://sanity.io`
- Login to your account
- Select project: `i0ueq3bg`
- Access production dataset

**Option B: Local Studio**
```bash
# If Sanity CLI is installed
sanity studio

# Opens at: http://localhost:3333
```

### 2. Fetch Content in Your App

#### Basic Example - Fetch All Blog Posts
```typescript
import { getSanityContent } from '@/lib/sanity'

// In your component or server function
const posts = await getSanityContent(
  `*[_type == "post"]{_id, title, slug, excerpt, body}`,
  [] // fallback data
)
```

#### Example - Fetch Services
```typescript
const services = await getSanityContent(
  `*[_type == "service"] | order(publishedAt desc) {
    _id,
    title,
    description,
    icon,
    details[]
  }`,
  [] // fallback: empty array
)
```

#### Example - Fetch Care Plans
```typescript
const plans = await getSanityContent(
  `*[_type == "carePlan"] {
    _id,
    name,
    price,
    period,
    description,
    features[]
  }`,
  [] // fallback: empty array
)
```

### 3. Integrate with Components

**Server Component Example**:
```typescript
import { getSanityContent } from '@/lib/sanity'

export default async function ServicesPage() {
  const services = await getSanityContent(
    `*[_type == "service"] | order(position asc)`,
    defaultServices // local fallback
  )

  return (
    <section>
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </section>
  )
}
```

**Client Component Example**:
```typescript
'use client'

import { useEffect, useState } from 'react'
import { getSanityContent } from '@/lib/sanity'

export function DynamicTestimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSanityContent(
      `*[_type == "testimonial"] | order(publishedAt desc)[0:3]`,
      defaultTestimonials
    ).then(data => {
      setTestimonials(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial._id} {...testimonial} />
      ))}
    </div>
  )
}
```

---

## 📊 Recommended Content Schema

### Service Schema
```
{
  _type: "service",
  title: "Parent Care & Wellness",
  description: "...",
  icon: "👨‍👩‍👧",
  category: "care",
  details: ["Detail 1", "Detail 2", ...],
  position: 1,
  publishedAt: datetime
}
```

### Care Plan Schema
```
{
  _type: "carePlan",
  name: "Family Care",
  price: 7999,
  period: "/month",
  description: "...",
  features: ["Feature 1", "Feature 2", ...],
  popular: false,
  position: 1
}
```

### Testimonial Schema
```
{
  _type: "testimonial",
  name: "John Doe",
  location: "New Jersey, USA",
  quote: "ManaCare has been a blessing...",
  role: "NRI Parent",
  publishedAt: datetime
}
```

### Slideshow Schema
```
{
  _type: "slide",
  title: "Parent Care & Wellness",
  subtitle: "...",
  category: "Parents",
  icon: "👨‍👩‍👧",
  image: image,
  cta: "Learn More",
  position: 1
}
```

---

## 🔍 Real-time Updates

The Sanity CMS includes:
- ✅ **Real-time Publishing**: Changes appear instantly
- ✅ **Version Control**: Track all content changes
- ✅ **Rollback**: Restore previous versions if needed
- ✅ **Collaboration**: Multiple editors can work simultaneously
- ✅ **Asset Management**: Built-in image/media library
- ✅ **Preview**: See changes before publishing

---

## 🛠️ Running with Sanity

### Development
```bash
npm run dev
```
- Application starts at `http://localhost:3000`
- Sanity content is fetched automatically
- Falls back to local data if Sanity is unavailable

### Production Build
```bash
npm run build
npm start
```
- Production-optimized build
- Sanity content is cached efficiently
- CDN enabled for fast delivery

---

## 🚨 Troubleshooting

### Issue: "Sanity content not loading"
**Solution**:
1. Verify `.env.local` has correct credentials
2. Check project ID: `i0ueq3bg`
3. Confirm dataset is set to `production`
4. Restart dev server: `npm run dev`
5. Check browser console for errors

### Issue: "Fallback data showing instead of Sanity content"
**Possible causes**:
- Sanity project is private/unauthorized
- Query syntax error
- Content doesn't exist in Sanity
- Network connectivity issue

**Solution**:
1. Check Sanity Studio for content
2. Verify GROQ query syntax
3. Check browser Network tab for API calls
4. Test query in Sanity API explorer

### Issue: "Images not loading from Sanity"
**Solution**:
```typescript
// Use Sanity image helper
import { urlFor } from '@/lib/sanity'

<img src={urlFor(imageAsset).url()} alt="..." />
```

---

## 📚 Useful Resources

- **Sanity Documentation**: https://www.sanity.io/docs
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Next.js Integration**: https://www.sanity.io/guides/sanity-with-next-js
- **Asset Pipeline**: https://www.sanity.io/docs/asset-pipeline

---

## 🔐 Security Notes

- ✅ Project ID is public (it's in `.env.local`)
- ✅ API key should NOT be exposed to client
- ✅ All client queries use public API
- ✅ Use server-side functions for authenticated operations
- ✅ CORS is properly configured in Sanity

---

## 📋 Content Checklist

Before going live, create these content types in Sanity:

- [ ] Services (Parent Care, Property Management, etc.)
- [ ] Care Plans (Essential, Family, Complete, NRI Prime)
- [ ] Testimonials (3-5 initial testimonials)
- [ ] Slideshow Slides (4 hero slides)
- [ ] Locations (Active cities list)
- [ ] Team Members (Optional)
- [ ] FAQ Items (Optional)
- [ ] Blog Posts (Optional)

---

## 🎯 Next Steps

1. **Access Sanity Studio**: https://sanity.io
2. **Create your first document**: Start with Services
3. **Write a GROQ query**: Test in API explorer
4. **Update component**: Replace static data with `getSanityContent`
5. **Test in dev mode**: `npm run dev`
6. **Deploy**: Your changes are now live!

---

## 💡 Pro Tips

1. **Use image optimization**: Sanity provides CDN-backed images
2. **Implement caching**: Use `revalidateTag` in Next.js
3. **Monitor performance**: Check Sanity metrics dashboard
4. **Create structured content**: Use references and arrays
5. **Use rich text**: Use Portable Text for flexible formatting

---

**Created**: June 7, 2026  
**Status**: ✅ Ready to Use  
**Support**: Contact Sanity support or check documentation

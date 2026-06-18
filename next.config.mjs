import fs from 'fs'
import path from 'path'

// Copy generated assets from sandboxed brain directory to public assets folder on start
// const assetsSource = '/Users/venkatkarthik/.gemini/antigravity/brain/f08dfa25-32b3-4fc7-9662-02bd4b2db4ba'
// const assetsDest = './public/assets'

// try {
//   if (!fs.existsSync(assetsDest)) {
//     fs.mkdirSync(assetsDest, { recursive: true })
//   }
  
//   const filesToCopy = [
//     { src: 'elderly_care_1780796271238.png', dest: 'elderly_care.png' },
//     { src: 'property_inspection_1780796291731.png', dest: 'property_inspection.png' },
//     { src: 'servostay_room_1780796310320.png', dest: 'servostay_room.png' },
//     { src: 'manacare_logo_1780796324708.png', dest: 'manacare_logo.png' }
//   ]
  
//   for (const file of filesToCopy) {
//     const srcPath = path.join(assetsSource, file.src)
//     const destPath = path.join(assetsDest, file.dest)
//     if (fs.existsSync(srcPath)) {
//       fs.copyFileSync(srcPath, destPath)
//       console.log(`[ManaCare Setup] Copied ${file.src} to ${file.dest}`)
//     }
//   }
// } catch (error) {
//   console.error('[ManaCare Setup] Error copying assets:', error)
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig


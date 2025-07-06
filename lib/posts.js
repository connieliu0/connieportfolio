import fs from 'fs/promises'
import path from 'path'

// Helper function to get the correct posts directory based on type
function getPostsDirectory(type) {
  if (type === 'case') {
    return path.join(process.cwd(), 'posts/case-studies')
  } else if (type === 'research') {
    return path.join(process.cwd(), 'posts/research')
  } else {
    throw new Error(`Unknown post type: ${type}`)
  }
}

export async function getSortedPostsData(type = 'case') {
  try {
    const postsDirectory = getPostsDirectory(type)
    const fileNames = await fs.readdir(postsDirectory)
    const allPostsData = await Promise.all(fileNames
      .filter(fileName => fileName !== 'customformula.mdx') // Exclude from lists
      .map(async (fileName) => {
      const id = fileName.replace(/\.mdx$/, '')

      const fullPath = path.join(postsDirectory, fileName)
      let fileContents
      try {
        fileContents = await fs.readFile(fullPath, 'utf8')
      } catch (error) {
        console.error(`Error reading file ${fileName}:`, error)
        return null
      }

      // Use a regex to extract the meta object
      const metaMatch = fileContents.match(/export const meta = ({[\s\S]*?})/)
      
      if (!metaMatch) {
        console.warn(`No meta object found in ${fileName}`)
        return null
      }

      const metaString = metaMatch[1]
      let meta
      try {
        // Use eval to parse the meta object (be cautious with this approach)
        meta = eval(`(${metaString})`)
      } catch (error) {
        console.error(`Error parsing meta in ${fileName}:`, error)
        return null
      }

      return {
        id,
        ...meta,
      }
    }))

    const validPosts = allPostsData.filter(Boolean) // Remove any null entries

    return validPosts.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error in getSortedPostsData:', error)
    return []
  }
}

export async function getAllPostIds(type = 'case') {
  try {
    const postsDirectory = getPostsDirectory(type)
    const fileNames = await fs.readdir(postsDirectory)

    // Check if fileNames is an array and has length
    if (!Array.isArray(fileNames) || fileNames.length === 0) {
      console.warn('No post files found in the posts directory')
      return []
    }

    // Include all files, even protected ones, for routing
    return fileNames.map((fileName) => ({
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }))
  } catch (error) {
    console.error('Error in getAllPostIds:', error)
    return []
  }
}

export async function getPostData(id, type = 'case') {
  try {
    const postsDirectory = getPostsDirectory(type)
    const fullPath = path.join(postsDirectory, `${id}.mdx`)
    const fileContents = await fs.readFile(fullPath, 'utf8')

    // Use a regex to extract the meta object
    const metaMatch = fileContents.match(/export const meta = ({[\s\S]*?})/)
    
    if (!metaMatch) {
      throw new Error(`No meta object found in ${id}.mdx`)
    }

    const metaString = metaMatch[1]
    let meta
    try {
      meta = eval(`(${metaString})`)
    } catch (error) {
      throw new Error(`Error parsing meta in ${id}.mdx: ${error.message}`)
    }

    // Remove the meta object and import statements from the content
    const content = fileContents
      .replace(/import.*?from.*?[\r\n]/g, '')
      .replace(/export const meta = {[\s\S]*?}/, '')
      .trim()

    return {
      id,
      content,
      ...meta,
    }
  } catch (error) {
    console.error(`Error in getPostData for ${id}:`, error)
    throw error
  }
}
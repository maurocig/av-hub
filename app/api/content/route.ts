import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { blogPosts } from '../../../public/assets/blogPosts';

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(blogPosts);
}

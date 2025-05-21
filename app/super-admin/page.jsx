"use client"
import { redirect } from 'next/navigation';

export default function AdminIndexPage() {
  redirect('/super-admin/login');
}

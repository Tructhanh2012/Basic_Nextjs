'use client' // để sd useEffect()
import Link from 'next/link'
import '@/styles/app.css'
import x from '@/styles/app.module.css'
import AppTable from '../components/app.table'
import { useEffect } from 'react'
import useSWR from 'swr';     // sd bên trong client

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  if (!data) {
    return (
      <div>......isLoading</div>
    )
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('http://localhost:8000/blogs')
  //     const data = await res.json()
  //     console.log("check res: ", data)
  //   }
  //   fetchData();
  // }, [])

  return (
    <div>
      <ul>
        <li className='red'>
          <Link href={"/facebook"}>Facebook</Link>
        </li>
        <li className={x['red']}>
          <Link href={'/youtube'}>Youtube</Link>
        </li>
      </ul>
      <AppTable blogs={data} />
    </div>
  )
}

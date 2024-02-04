"use client";
import React, { useEffect, useState } from 'react';
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard  = () => {

  //instead of useEffect you can use SWR hook from nextjs library which
  //include err and isLoading built in and it's recommended as well

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // //fetch data using useEffect
  // useEffect(() => {
  //   const getData = async () => {
  //         setIsLoading(true)
  //         const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  //           cache:"no-store",
  //           }); 

  //           if (!res.ok) {
  //             setErr(true)
  //           }
            
  //           const data = await res.json();

  //           setData(data);
  //           setIsLoading(false);
  //       };
  //       getData() 
  // },[]);

  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data, mutate, error, isLoading} = useSWR
  (`/api/posts?username=${session?.data?.user.name}`, fetcher);

  console.log(data);

  if(session.status === "loading"){
    return <p>Loading...</p>; 
  }

  if(session.status === "unauthenticated"){
    router?.push("/dashboard/login");
  }

  //it's because we used return statement above so we cannot use fetching method here
  //it should be on top

  // const fetcher = (...args) => fetch(...args).then(res => res.json());
  // const { data, error, isLoading} = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify({
          title,
          desc,
          img,
          content,
          username:session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`,{
        method:"DELETE",
    });
    mutate();
    } catch (error) {
      console.log(error);
    }
  }

  if(session.status === "authenticated"){
  return( 
  <div className={styles.container}>
    <div className={styles.posts}>
      {isLoading ? "loading" : data?.map((post) => (
        <div className={styles.post} key={post._id}>
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" width={200} height={100}/>
        </div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
      </div>
  ))}
    </div>
    <form className={styles.new} onSubmit={handleSubmit}>
      <h1>Add a new Post</h1>
      <input type="text" placeholder="Title" className={styles.input} />
      <input type="text" placeholder="Description" className={styles.input} />
      <input type="text" placeholder="Image" className={styles.input} />
      <textarea placeholder="Content" className={styles.textArea} 
      cols="30" rows="10"></textarea>
      <button className={styles.button}>Post</button>
    </form>
  </div>
  );
  }
};

export default Dashboard 
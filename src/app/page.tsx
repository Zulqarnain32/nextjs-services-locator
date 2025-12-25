"use client";
import { useServices } from "@/hooks/use-services";
export default function HomePage() {
  const { data, isLoading, error } = useServices();

  if (isLoading){
    console.log("loading ...")
    return (
      <>
        <p>Loading...</p>;
      </>
    )
  }

  if (error) {
    console.log("error is ",error)
    return (
      <>
        <p>Error loading services</p>
      </>
    );
  }

  return (
    <div>
      <h1>Services</h1>
      {data?.map((service: any) => (
        <div key={service.id}>{service.name}</div>
      ))}
    </div>
  );
}

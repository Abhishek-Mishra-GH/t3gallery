import Link from "next/link";

const imgData = [
  {
    "name": "eberhard-grossgasteiger-CjZZlnPvVfg-unsplash.jpg",
    "key": "AUOctjTdmlR6kVQIXP4vqpP7BbkFcNAhZHzuwXLYnSVm6Rl4",
    "customId": null,
    "url": "https://utfs.io/f/AUOctjTdmlR6kVQIXP4vqpP7BbkFcNAhZHzuwXLYnSVm6Rl4",
    "size": "1978443",
    "uploadedAt": "2024-11-09T16:07:55.000Z"
  },
  {
    "name": "kirsten-frank-jIQoMYKG8HI-unsplash.jpg",
    "key": "AUOctjTdmlR65bbOJjAtDho3ABJpdlgnjbx9TY4Ciy0XEz1H",
    "customId": null,
    "url": "https://utfs.io/f/AUOctjTdmlR65bbOJjAtDho3ABJpdlgnjbx9TY4Ciy0XEz1H",
    "size": "1099828",
    "uploadedAt": "2024-11-09T16:07:55.000Z"
  },
  {
    "name": "bennie-bates-tImI2pWy0g4-unsplash.jpg",
    "key": "AUOctjTdmlR6KXD9p6CISla1etupL72Fq9PMgrbWNJB8CXy5",
    "customId": null,
    "url": "https://utfs.io/f/AUOctjTdmlR6KXD9p6CISla1etupL72Fq9PMgrbWNJB8CXy5",
    "size": "3329057",
    "uploadedAt": "2024-11-09T16:07:54.000Z"
  },
  {
    "name": "sabesh-photography-ltd-B3d-84Dljqs-unsplash.jpg",
    "key": "AUOctjTdmlR6L4BnibYRU7rnZT2OCVpNlMXqmuE6g1c0soaj",
    "customId": null,
    "url": "https://utfs.io/f/AUOctjTdmlR6L4BnibYRU7rnZT2OCVpNlMXqmuE6g1c0soaj",
    "size": "4075979",
    "uploadedAt": "2024-11-09T16:07:54.000Z"
  },
  {
    "name": "mathias-reding-Cqa26OOubMs-unsplash.jpg",
    "key": "AUOctjTdmlR6VjaHjPE5t7UYgkTyQG8RZiABe1FzdwKEhcNW",
    "customId": null,
    "url": "https://utfs.io/f/AUOctjTdmlR6VjaHjPE5t7UYgkTyQG8RZiABe1FzdwKEhcNW",
    "size": "4401652",
    "uploadedAt": "2024-11-09T16:07:54.000Z"
  }
]

const mockUrls = imgData.map((img) => img.url)

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={Math.round(Math.random() * 1000)} className="w-80">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}

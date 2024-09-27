"use client";
import ClipLoader from 'react-spinners/ClipLoader';

function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#3b82f6" loading={true} size={150} />
    </div>
  )
}

export default LoadingPage

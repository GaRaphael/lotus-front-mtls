"use client";

interface Props {
  images: any
}

export default function ProductGallery({ images }: Props) {

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 100px 0 150px',
        }}
      >
        <div>
          <img className="max-h-[250px] max-w-[350px] mt-[130px]" src={images} />
          <img className="max-h-[250px] max-w-[350px] mt-[20px]" src={images} />
          <img className="max-h-[250px] max-w-[350px] mt-[20px]" src={images} />
        </div>
        <div>
          <img className="max-h-[790px] max-w-[700px] mt-[130px] ml-[70px]" src={images} />
        </div>
      </div>
    </>
  );
}
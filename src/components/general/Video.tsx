const Video = () => {
  return (
    <div>
      <h3 className="text-3xl mb-2">Видео, где я обучаю своих студентов</h3>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/FAEVG9d61vY`}
        title="Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;

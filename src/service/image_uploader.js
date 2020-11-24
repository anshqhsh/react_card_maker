class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'pdzaoz52');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/drqni4rhj/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();//result를 jason 변환후 리턴
  }
}

export default ImageUploader;
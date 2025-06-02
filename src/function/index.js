const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
		const link = document.createElement('a');
		link.href = '/cv.pdf'; // or a blob URL
		link.download = 'My_CV.pdf';
		link.click();
	  };
	  

  export {
    scrollToSection,
    handleDownload
  }
function showImage(selectElement) {
    // Hide all images within the same dropdown
    const dropdown = selectElement.parentElement;
    const images = dropdown.querySelectorAll('.model-image');
    images.forEach(img => img.classList.remove('active'));
  
    // Show the selected image
    const selectedValue = selectElement.value;
    if (selectedValue) {
      const selectedImg = dropdown.querySelector(`#${selectedValue}`);
      if (selectedImg) {
        selectedImg.classList.add('active');
      }
    }
  }
  
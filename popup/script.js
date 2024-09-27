document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('open-popup');
    const closeButtons = document.querySelectorAll('.close-popup');
    const popups = document.querySelectorAll('.popup');
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    // Open the popup form
    openPopupButton.addEventListener('click', function () {
        document.getElementById('popup-step1').style.display = 'block';
        document.getElementById('popup-step1').style.opacity = '1';
    });

    // Close button event for all popups
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            popups.forEach(popup => {
                popup.style.display = 'none';
                popup.style.opacity = '0';
            });
        });
    });

    // Move to the next step
    document.getElementById('next-step1').addEventListener('click', function () {
        document.getElementById('popup-step1').style.display = 'none';
        document.getElementById('popup-step2').style.display = 'block';
        document.getElementById('popup-step2').style.opacity = '1';
    });

    document.getElementById('next-step2').addEventListener('click', function () {
        document.getElementById('popup-step2').style.display = 'none';
        document.getElementById('popup-step3').style.display = 'block';
        document.getElementById('popup-step3').style.opacity = '1';
    });

    // Back to previous step
    document.getElementById('prev-step2').addEventListener('click', function () {
        document.getElementById('popup-step2').style.display = 'none';
        document.getElementById('popup-step1').style.display = 'block';
        document.getElementById('popup-step1').style.opacity = '1';
    });

    document.getElementById('prev-step3').addEventListener('click', function () {
        document.getElementById('popup-step3').style.display = 'none';
        document.getElementById('popup-step2').style.display = 'block';
        document.getElementById('popup-step2').style.opacity = '1';
    });

    // Handle image upload and preview
    imageUpload.addEventListener('change', function () {
        imagePreview.innerHTML = ''; // Clear previous preview

        const files = imageUpload.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    imagePreview.appendChild(imgElement);
                };
                reader.readAsDataURL(file);
            }
        }
    });
});

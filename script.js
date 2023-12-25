window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

const items = document.querySelectorAll('.img-item');

for(let i = 0; i < items.length; i++){

    const keyframes = {
      opacity: [0, 1],
      translate: ['0 50px', 0],
      filter: ['blur(10px)', 'blur(0)'],
    };

    const options = {
      duration: 600,
      delay: i * 400,
      fill: 'forwards',
    };

    items[i].animate(keyframes, options);
  }

  (function() {
    let cc = document.querySelector('.cookie-consent');
    let ca = document.querySelector('.cookie-agree');
    const flag = localStorage.getItem('popupFlag');
    if (flag != null) {
      const data = JSON.parse(flag);
      if (data['value'] == 'true') {
        window.onscroll = () => {
          if (window.pageYOffset) {
            popup();
          }
        }
      } else {
        const current = new Date();
        if (current.getTime() > data['expire']) {
          setWithExpiry('popupFlag', 'true', expire);
          window.onscroll = () => {
            if (window.pageYOffset) {
              popup();
            }
          }
        }
      }
    } else {
      setWithExpiry('popupFlag', 'true', expire);
      window.onscroll = () => {
        if (window.pageYOffset) {
          popup();
        }
      }
    }
    ca.addEventListener('click', () => {
      cc.classList.add('cc-hide1');
    });


    function popup() {
      cc.classList.add('is-show');
    }
  }());

  const map = L.map('map').setView([30.30270071203621, -97.67324649633491], 15);

  // タイルレイヤーを作成し、地図にセットする
  // Open Street Map
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([30.30270071203621, -97.67324649633491]).addTo(map)
    .bindPopup('See ya ;)');


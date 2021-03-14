function addingEventListener() {
    const input = document.getElementById('input');
    const div5 = document.querySelector('div div div div div');

    input.addEventListener('click', clickAlert);
    div5.addEventListener('click', clickAlert);

    function clickAlert() {
        alert('Hee hee, that tickles!');
    }
  }

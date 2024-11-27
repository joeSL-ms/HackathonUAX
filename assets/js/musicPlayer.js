function toggleMusicPlayer() {
    const musicPlayerSection = document.getElementById('music-player-section');
    const musicPlayerCheckbox = document.getElementById('music-player');
    musicPlayerSection.style.display = musicPlayerCheckbox.checked ? 'block' : 'none';
}

function saveSettings() {
    const form = document.getElementById('admin-form');
    const formData = new FormData(form);

    const settings = {};
    for (let [key, value] of formData.entries()) {
        if (settings[key]) {
            if (!Array.isArray(settings[key])) {
                settings[key] = [settings[key]];
            }
            settings[key].push(value);
        } else {
            settings[key] = value;
        }
    }

    console.log('Settings Saved:', settings);
    alert('Settings saved successfully!');
}
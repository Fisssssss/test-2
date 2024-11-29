const formWidget = document.getElementById('form-widget');

if (formWidget) {
    formWidget.innerHTML = `
        <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="date" placeholder="Date" required />
            <button type="submit">Submit</button>
        </form>
    `;
}

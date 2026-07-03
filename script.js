document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelecctor('.hero_greeting'), txt = "Hello World";
    let i = 0;
    const type = () => {
        if (i < txt.length) {
            el.textContent += txt[i++];
            setTimeout(ype, 80);
        } else {
            el.style.borderRight = 'none';
            document.querySelectorAll('.hero_content > *:not(.hero_greeting)').forEach(c => {
                c.style.opacity = '1'; c.style.transform = 'translateY(0)';

            });
        }
    };
    setTimeout(type, 200);

    const obs = new IntersectionObserver(e => e.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');

    }),
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px ' });

    document.querySelectorAll('.slide-in, .fade-in-scroll').forEach(x => obs.observer(x));
});
/**
 * AURA DIGITAL STUDIO — Interactive Logic v2
 * Cursor Custom · Tilt 3D · Parallax · Magnetic Hover
 * Budget Calculator + Monthly Plan · FAQ Accordion · Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {

    const WHATSAPP = '5581999999999';

    /* ─────────────────────────────────────────
       1. CUSTOM CURSOR
       (só roda em telas com mouse de verdade — evita
       loop infinito consumindo bateria/CPU no celular)
    ───────────────────────────────────────── */
    const hasRealMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (hasRealMouse) {
        const cursorDot  = document.getElementById('cursorDot');
        const cursorRing = document.getElementById('cursorRing');
        let mouseX = 0, mouseY = 0;
        let ringX  = 0, ringY  = 0;

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top  = mouseY + 'px';
        });

        // Lagged ring animation
        (function animateRing() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top  = ringY + 'px';
            requestAnimationFrame(animateRing);
        })();

        // Hover states on interactive elements
        const hoverTargets = document.querySelectorAll(
            'a, button, .option-card, .maintenance-card, .addon-checkbox, .faq-question, .tilt-card'
        );
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }

    /* ─────────────────────────────────────────
       2. HEADER SCROLL
    ───────────────────────────────────────── */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    /* ─────────────────────────────────────────
       3. MOBILE MENU
    ───────────────────────────────────────── */
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu      = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link =>
            link.addEventListener('click', () => navMenu.classList.remove('active'))
        );
    }

    /* ─────────────────────────────────────────
       4. PARALLAX — Hero card follows mouse gently
    ───────────────────────────────────────── */
    const heroCard = document.getElementById('heroCard');
    if (heroCard) {
        const heroVisual = document.getElementById('heroVisual');
        heroVisual.addEventListener('mousemove', e => {
            const rect   = heroVisual.getBoundingClientRect();
            const cx     = rect.left + rect.width  / 2;
            const cy     = rect.top  + rect.height / 2;
            const dx     = (e.clientX - cx) / rect.width;
            const dy     = (e.clientY - cy) / rect.height;
            const rotX   = -dy * 10;
            const rotY   =  dx * 10;
            heroCard.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
            heroCard.style.boxShadow = `${-dx * 20}px ${-dy * 20}px 60px rgba(16,185,129,0.2)`;
        });
        heroVisual.addEventListener('mouseleave', () => {
            heroCard.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
            heroCard.style.boxShadow = '';
        });
    }

    /* ─────────────────────────────────────────
       5. TILT 3D — Feature and Portfolio cards
    ───────────────────────────────────────── */
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r  = card.getBoundingClientRect();
            const cx = r.left + r.width  / 2;
            const cy = r.top  + r.height / 2;
            const dx = (e.clientX - cx) / r.width;
            const dy = (e.clientY - cy) / r.height;
            card.style.transform = `perspective(600px) rotateX(${-dy * 7}deg) rotateY(${dx * 7}deg) translateY(-4px)`;
            card.style.boxShadow = `${-dx * 15}px ${-dy * 15}px 35px rgba(16,185,129,0.15)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });

    /* ─────────────────────────────────────────
       6. MAGNETIC BUTTONS
    ───────────────────────────────────────── */
    document.querySelectorAll('.magnetic').forEach(el => {
        el.addEventListener('mousemove', e => {
            const r   = el.getBoundingClientRect();
            const dx  = e.clientX - (r.left + r.width  / 2);
            const dy  = e.clientY - (r.top  + r.height / 2);
            el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });

    /* ─────────────────────────────────────────
       7. PARALLAX BACKGROUND GLOW on scroll
    ───────────────────────────────────────── */
    const glows = document.querySelectorAll('.bg-glow');
    window.addEventListener('scroll', () => {
        const sy = window.scrollY;
        glows[0] && (glows[0].style.transform = `translateY(${sy * 0.08}px)`);
        glows[1] && (glows[1].style.transform = `translateY(${-sy * 0.06}px)`);
        glows[2] && (glows[2].style.transform = `translateY(${sy * 0.04}px)`);
    }, { passive: true });

    /* ─────────────────────────────────────────
       8. CALCULATOR — Tipo de Projeto
    ───────────────────────────────────────── */
    const typeCards  = document.querySelectorAll('#typeOptions .option-card');
    const addonInputs = document.querySelectorAll('#addonOptions input[type="checkbox"]');
    const mainCards  = document.querySelectorAll('#maintenanceOptions .maintenance-card');

    const elTypeName    = document.getElementById('selectedTypeName');
    const elTime        = document.getElementById('estimatedTime');
    const elAddons      = document.getElementById('selectedAddonsList');
    const elMaintenance = document.getElementById('selectedMaintenance');
    const elTotal       = document.getElementById('totalPriceDisplay');
    const elMonthly     = document.getElementById('monthlyPriceDisplay');
    const monthlyRow    = document.getElementById('monthlyRow');
    const waBtn         = document.getElementById('calcSendWhatsapp');

    function updateCalc() {
        const activeType = document.querySelector('#typeOptions .option-card.active');
        const activePlan = document.querySelector('#maintenanceOptions .maintenance-card.active');
        if (!activeType) return;

        const basePrice   = +activeType.dataset.price  || 0;
        const timeEst     = activeType.dataset.time     || '3 a 4 dias úteis';
        const typeName    = activeType.querySelector('.option-title').textContent.trim();
        const planPrice   = activePlan ? (+activePlan.dataset.mPrice || 0) : 0;
        const planName    = activePlan ? (activePlan.dataset.mName  || '') : '';

        let addonsTotal = 0;
        let addonsNames = [];
        addonInputs.forEach(inp => {
            if (inp.checked) {
                addonsTotal += +inp.dataset.price || 0;
                addonsNames.push(inp.dataset.name || inp.value);
            }
        });

        const grand = basePrice + addonsTotal;

        if (elTypeName)    elTypeName.textContent    = typeName;
        if (elTime)        elTime.textContent         = timeEst;
        if (elAddons)      elAddons.textContent       = addonsNames.length ? addonsNames.join(', ') : 'Nenhum recurso extra';
        if (elMaintenance) elMaintenance.textContent  = planName || 'Sem plano mensal';
        if (elTotal)       elTotal.textContent        = `R$ ${grand.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

        if (monthlyRow) {
            if (planPrice > 0) {
                monthlyRow.classList.add('visible');
                if (elMonthly) elMonthly.textContent = `+ R$ ${planPrice}/mês`;
            } else {
                monthlyRow.classList.remove('visible');
            }
        }

        // WhatsApp mensagem formatada
        if (waBtn) {
            const extras = addonsNames.length ? addonsNames.join(', ') : 'Nenhum';
            const manut  = planPrice > 0 ? `${planName} (R$ ${planPrice}/m\u00eas)` : 'Sem plano mensal';
            const msg =
                `Ol%C3%A1!%20Simulei%20meu%20projeto%20no%20site%3A%0A%0A` +
                `%F0%9F%93%8D%20*Projeto%3A*%20${encodeURIComponent(typeName)}%0A` +
                `%E2%9A%A1%20*Recursos%3A*%20${encodeURIComponent(extras)}%0A` +
                `%F0%9F%94%A7%20*Manuten%C3%A7%C3%A3o%3A*%20${encodeURIComponent(manut)}%0A` +
                `%E2%8F%B3%20*Prazo%3A*%20${encodeURIComponent(timeEst)}%0A` +
                `%F0%9F%92%B3%20*Investimento%3A*%20R%24%20${grand.toFixed(2)}%0A%0A` +
                `Gostaria%20de%20alinhar%20os%20detalhes%20e%20dar%20in%C3%ADcio!`;
            waBtn.href = `https://wa.me/${WHATSAPP}?text=${msg}`;
        }
    }

    typeCards.forEach(c => {
        c.addEventListener('click', () => {
            typeCards.forEach(x => x.classList.remove('active'));
            c.classList.add('active');
            updateCalc();
        });
    });

    mainCards.forEach(c => {
        c.addEventListener('click', () => {
            mainCards.forEach(x => x.classList.remove('active'));
            c.classList.add('active');
            updateCalc();
        });
    });

    addonInputs.forEach(inp => inp.addEventListener('change', updateCalc));
    updateCalc();

    /* ─────────────────────────────────────────
       9. FAQ ACCORDION
    ───────────────────────────────────────── */
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!isOpen) item.classList.add('active');
        });
    });

    /* ─────────────────────────────────────────
       10. SCROLL REVEAL via IntersectionObserver
    ───────────────────────────────────────── */
    const revealEls = document.querySelectorAll(
        '.feature-card, .portfolio-card, .process-step-card, .section-header, .calculator-wrapper, .faq-item, .cta-banner'
    );

    // staggered reveal
    revealEls.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(i % 4) * 0.07}s`;
    });

    // hero text elements slide in from left
    document.querySelector('.hero-content')?.classList.add('reveal-left');
    document.querySelector('.hero-visual')?.classList.add('reveal-right');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('active');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach(el => observer.observe(el));

});
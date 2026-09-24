    "use strict";

    /* Dados centrais: adicione cenários e riscos seguindo esta mesma estrutura. */
    const scenarios = {
      construcao: {
        name: "Canteiro de obras",
        emoji: "🏗️",
        colors: { background: "#9ed8ec", accent: "#ffcb05", dark: "#293238" },
        risks: [
          { id: "fios-expostos", x: 64.5, y: 75.5, area: { legacy: true, z: 2 }, name: "Fios elétricos expostos", danger: "Podem provocar choque elétrico, queimaduras e incêndio.", control: "Desenergizar, isolar os condutores e proteger o circuito com instalação elétrica adequada." },
          { id: "andaime-sem-guarda-corpo", x: 93, y: 25, area: { w: 15, h: 31, radius: "16px" }, name: "Andaime sem guarda-corpo", danger: "Trabalhadores e materiais podem cair da plataforma.", control: "Instalar guarda-corpo completo, rodapé e acesso seguro antes de liberar o andaime." },
          { id: "sem-capacete", x: 15, y: 65, area: { w: 11, h: 27, radius: "42%", z: 4 }, name: "Trabalhador sem capacete", danger: "A cabeça fica exposta a impactos e à queda de objetos.", control: "Usar capacete de segurança com ajuste correto e verificar sua conservação." },
          { id: "buraco-aberto", x: 40, y: 72.5, area: { w: 26, h: 17, radius: "48%", clip: "ellipse(49% 46% at 50% 50%)", z: 1 }, name: "Buraco sem sinalização", danger: "Pode causar queda, torção ou atropelamento por equipamentos.", control: "Isolar, sinalizar e, quando possível, cobrir a abertura com proteção resistente." },
          { id: "pilha-instavel", x: 88, y: 66, area: { w: 17, h: 42, radius: "14px", z: 3 }, name: "Materiais empilhados de forma instável", danger: "A pilha pode desabar e atingir pessoas próximas.", control: "Empilhar em base nivelada, respeitar limites de altura e usar contenção quando necessário." },
          { id: "ferramenta-no-chao", x: 9, y: 79, area: { legacy: true, z: 5 }, name: "Ferramenta no chão", danger: "Cria risco de tropeço, queda e cortes.", control: "Manter a área organizada e guardar ferramentas em local próprio após o uso." },
          { id: "escada-mal-apoiada", x: 73.5, y: 49.3, area: { w: 8, h: 43, rotate: 17, radius: "18px", z: 4 }, name: "Escada mal apoiada", danger: "A escada pode escorregar ou tombar durante o acesso.", control: "Apoiar em superfície firme, manter ângulo seguro e fixar as extremidades." }
        ],
        sceneImage: "assets/canteiro-de-obras.png"
      },

      cozinha: {
        name: "Cozinha industrial",
        emoji: "🍳",
        colors: { background: "#e6edf0", accent: "#f4513b", dark: "#5b2630" },
        risks: [
          { id: "piso-molhado", x: 18, y: 80, area: { w: 36, h: 32, radius: "0", clip: "polygon(0 5%, 13% 2%, 16% 7%, 28% 8%, 31% 13%, 43% 15%, 46% 23%, 55% 25%, 58% 34%, 67% 40%, 72% 50%, 86% 56%, 85% 65%, 92% 71%, 88% 80%, 78% 82%, 76% 88%, 65% 85%, 61% 93%, 51% 91%, 46% 98%, 34% 97%, 29% 91%, 20% 94%, 16% 86%, 7% 88%, 0 80%)" }, name: "Piso molhado", danger: "Pode causar escorregões, quedas e colisões com equipamentos quentes.", control: "Limpar e secar imediatamente, sinalizando a área até que esteja segura." },
          { id: "faca-fora-suporte", x: 57, y: 60, area: { legacy: true, z: 4 }, name: "Faca fora do suporte", danger: "Pode provocar cortes ao ser tocada ou derrubada.", control: "Guardar a faca em suporte apropriado e nunca deixá-la solta na bancada." },
          { id: "botijao-sem-trava", x: 93, y: 67, area: { w: 8, h: 30, radius: "40%", z: 3 }, name: "Botijão de gás sem fixação", danger: "Pode tombar, romper a conexão e causar vazamento ou explosão.", control: "Manter o cilindro em local ventilado, na vertical e preso por corrente ou suporte." },
          { id: "cabo-panela-fora", x: 63, y: 22, area: { legacy: true, z: 3 }, name: "Cabo da panela voltado para fora", danger: "Alguém pode esbarrar e derramar alimento quente.", control: "Manter os cabos voltados para dentro do fogão, sem alcançar outras bocas." },
          { id: "extintor-bloqueado", x: 4.2, y: 52, area: { w: 7, h: 30, minW: 32, radius: "16px", z: 2 }, name: "Extintor bloqueado", danger: "Atrasa a resposta inicial a um princípio de incêndio.", control: "Manter acesso livre, sinalização visível e inspeção do extintor em dia." },
          { id: "sem-touca-luvas", x: 70.5, y: 30.5, area: { w: 6.5, h: 10, minW: 32, minH: 36, radius: "50%", z: 5 }, name: "Funcionário sem touca e proteção adequada", danger: "Favorece contaminação dos alimentos e contato indevido com agentes quentes ou cortantes.", control: "Usar vestimenta e EPIs definidos para a tarefa, incluindo proteção dos cabelos." },
          { id: "oleo-sem-protecao", x: 40, y: 29, area: { w: 13, h: 10, radius: "18px", z: 2 }, name: "Óleo quente sem proteção", danger: "Respingos podem causar queimaduras graves e iniciar incêndio.", control: "Usar tampa ou proteção contra respingos e controlar temperatura e nível do óleo." }
        ],
        sceneImage: "assets/cozinha-industrial.png"
        },

      logistica: {
        name: "Centro de distribuição",
        emoji: "📦",
        colors: { background: "#c9d2db", accent: "#ff9f1c", dark: "#26384a" },
        risks: [
          { id: "empilhadeira-carga-alta", x: 24, y: 18, area: { w: 17, h: 20, radius: "14px", z: 1 }, name: "Empilhadeira com carga elevada em movimento", danger: "A carga reduz a visibilidade, desestabiliza o equipamento e pode cair.", control: "Transportar a carga baixa, estável e dentro da capacidade indicada pelo fabricante." },
          { id: "pedestre-fora-faixa", x: 43, y: 69, area: { w: 14, h: 28, radius: "42%", z: 3 }, name: "Pedestre fora da faixa de circulação", danger: "Aumenta o risco de atropelamento e colisão com equipamentos móveis.", control: "Usar rotas segregadas e sinalizadas, mantendo contato visual com operadores." },
          { id: "paletes-mal-empilhados", x: 61, y: 29, area: { w: 11, h: 26, radius: "12px", z: 2 }, name: "Paletes mal empilhados", danger: "Podem tombar, desabar e atingir trabalhadores ou veículos.", control: "Alinhar os paletes em base firme, limitar a altura e retirar unidades danificadas." },
          { id: "prateleira-sobrecarregada", x: 73, y: 12, area: { w: 23, h: 15, radius: "12px", z: 2 }, name: "Carga acima do limite da prateleira", danger: "A estrutura pode deformar ou colapsar sobre pessoas e mercadorias.", control: "Respeitar a capacidade sinalizada e distribuir uniformemente o peso." },
          { id: "postura-incorreta", x: 35, y: 41, area: { w: 14, h: 20, radius: "44%", z: 3 }, name: "Levantamento de peso com a coluna curvada", danger: "Pode causar distensões, lombalgia e lesões musculoesqueléticas.", control: "Aproximar a carga, flexionar os joelhos e usar auxílio mecânico ou de outra pessoa." },
          { id: "doca-sem-calco", x: 95, y: 84, area: { legacy: true, z: 3 }, name: "Caminhão na doca sem calço", danger: "O veículo pode se mover durante a carga e criar uma queda entre doca e carroceria.", control: "Acionar o freio, instalar calços nas rodas e confirmar o travamento antes da operação." },
          { id: "operador-sem-cinto", x: 11, y: 31, area: { w: 11, h: 20, radius: "44%", z: 5 }, name: "Operador de empilhadeira sem cinto", danger: "Em tombamento ou colisão, o operador pode ser lançado ou esmagado.", control: "Usar o cinto durante toda a operação e realizar checklist do equipamento." }
        ],
        sceneImage: "assets/centro-de-distribuicao.png"
      }
    };

    const state = {
      currentKey: null,
      found: new Set(),
      completed: {},
      lives: 3,
      time: 60,
      score: 0,
      hintUsed: false,
      muted: false,
      timerId: null,
      toastId: null,
      audio: null,
      menuMusic: null
    };

    const $ = (selector) => document.querySelector(selector);
    const screens = ["selectionScreen", "gameScreen", "resultScreen", "finalScreen"];

    function showScreen(id) {
      screens.forEach(screenId => $("#" + screenId).classList.toggle("hidden", screenId !== id));
      if (id === "selectionScreen") startMenuMusic();
      else stopMenuMusic();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function escapeHtml(text) {
      return String(text).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
    }

    function soundIcon(muted) {
      const waves = muted
        ? '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="m16 9 5 5m0-5-5 5"/>'
        : '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>';
      return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4z"/>${waves}</svg>`;
    }

    /* Áudio local: efeitos do jogo e trilha ambiente suave do menu. */
    function getAudioContext() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      state.audio ||= new AudioContext();
      if (state.audio.state === "suspended") state.audio.resume().catch(() => {});
      return state.audio;
    }

    function playTone(type) {
      if (state.muted) return;
      const context = getAudioContext();
      if (!context) return;
      const now = context.currentTime;
      const tones = type === "success" ? [[660, .08, 0], [880, .11, .09]] : [[170, .16, 0], [120, .2, .09]];
      tones.forEach(([frequency, duration, delay]) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = type === "success" ? "sine" : "sawtooth";
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(.0001, now + delay);
        gain.gain.exponentialRampToValueAtTime(.12, now + delay + .01);
        gain.gain.exponentialRampToValueAtTime(.0001, now + delay + duration);
        oscillator.connect(gain).connect(context.destination);
        oscillator.start(now + delay);
        oscillator.stop(now + delay + duration + .02);
      });
    }

    function startMenuMusic() {
      if (state.muted || state.menuMusic || $("#selectionScreen").classList.contains("hidden")) return;
      const context = getAudioContext();
      if (!context) return;

      const master = context.createGain();
      master.gain.setValueAtTime(.0001, context.currentTime);
      master.gain.linearRampToValueAtTime(.24, context.currentTime + 1.4);
      master.connect(context.destination);

      const chords = [
        [130.81, 164.81, 196],
        [110, 130.81, 164.81],
        [87.31, 130.81, 174.61],
        [98, 123.47, 146.83]
      ];
      const melody = [329.63, 392, 440, 392, 293.66, 329.63, 261.63, 293.66];
      state.menuMusic = { context, master, step: 0, interval: null };

      const playChord = () => {
        const music = state.menuMusic;
        if (!music || state.muted) return;
        const now = context.currentTime;
        const step = music.step++;
        const chord = chords[step % chords.length];
        chord.forEach((frequency, index) => {
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          oscillator.type = index === 0 ? "sine" : "triangle";
          oscillator.frequency.value = frequency;
          gain.gain.setValueAtTime(.0001, now);
          gain.gain.linearRampToValueAtTime(index === 0 ? .04 : .022, now + 1.2);
          gain.gain.exponentialRampToValueAtTime(.0001, now + 5.7);
          oscillator.connect(gain).connect(master);
          oscillator.start(now);
          oscillator.stop(now + 5.8);
        });

        [0, 1].forEach(noteIndex => {
          const delay = .7 + noteIndex * 2.35;
          const oscillator = context.createOscillator();
          const gain = context.createGain();
          oscillator.type = "sine";
          oscillator.frequency.value = melody[(step * 2 + noteIndex) % melody.length];
          gain.gain.setValueAtTime(.0001, now + delay);
          gain.gain.linearRampToValueAtTime(.045, now + delay + .18);
          gain.gain.exponentialRampToValueAtTime(.0001, now + delay + 1.85);
          oscillator.connect(gain).connect(master);
          oscillator.start(now + delay);
          oscillator.stop(now + delay + 1.9);
        });
      };

      playChord();
      state.menuMusic.interval = setInterval(playChord, 5400);
    }

    function stopMenuMusic() {
      const music = state.menuMusic;
      if (!music) return;
      clearInterval(music.interval);
      const now = music.context.currentTime;
      music.master.gain.cancelScheduledValues(now);
      music.master.gain.setValueAtTime(Math.max(.0001, music.master.gain.value), now);
      music.master.gain.exponentialRampToValueAtTime(.0001, now + .35);
      setTimeout(() => music.master.disconnect(), 450);
      state.menuMusic = null;
    }

    function toggleSound() {
      state.muted = !state.muted;
      [$("#soundButton"), $("#gameSoundButton")].forEach(button => {
        button.innerHTML = soundIcon(state.muted);
        button.setAttribute("aria-pressed", String(state.muted));
        button.setAttribute("aria-label", state.muted ? "Ativar música e sons" : "Silenciar música e sons");
        button.title = state.muted ? "Ativar música e sons" : "Silenciar música e sons";
      });
      if (state.muted) stopMenuMusic();
      else startMenuMusic();
    }

    function toast(message, type = "success") {
      const element = $("#toast");
      clearTimeout(state.toastId);
      element.textContent = message;
      element.className = `toast ${type} show`;
      state.toastId = setTimeout(() => element.className = "toast", 1800);
    }

    function renderSelection() {
      const grid = $("#scenarioGrid");
      grid.innerHTML = Object.entries(scenarios).map(([key, scenario]) => {
        const done = state.completed[key];
        return `
          <button class="scenario-card ${done ? "completed" : ""}" type="button" data-scenario="${key}"
            style="background:${scenario.colors.dark};" ${done ? "disabled" : ""}>
            ${done ? '<span class="completed-badge">✓ Concluído</span>' : ""}
            <span class="scenario-emoji" aria-hidden="true">${scenario.emoji}</span>
            <span class="scenario-copy">
              <span class="scenario-title">${escapeHtml(scenario.name)}</span>
              <span class="scenario-meta">${done ? `${done.score} pontos · ${"★".repeat(done.stars)}${"☆".repeat(3 - done.stars)}` : `${scenario.risks.length} riscos · 60 segundos`}</span>
            </span>
          </button>`;
      }).join("");
      grid.querySelectorAll("[data-scenario]").forEach(button => button.addEventListener("click", () => startScenario(button.dataset.scenario)));
    }

    /* Cada risco pode usar uma área de toque própria, alinhada ao objeto inteiro na imagem. */
    function riskTargetStyle(risk) {
      const area = risk.area || {};
      const rotation = Number(area.rotate) || 0;
      return [
        `left:${risk.x}%`,
        `top:${risk.y}%`,
        `--target-width:${area.w || 7.5}%`,
        `--target-height:${area.h || 11.25}%`,
        `--target-min-width:${area.minW || 48}px`,
        `--target-min-height:${area.minH || 48}px`,
        `--target-rotate:${rotation}deg`,
        `--marker-counter-rotate:${-rotation}deg`,
        `--target-radius:${area.radius || "50%"}`,
        `--target-clip:${area.clip || "none"}`,
        `--target-z:${area.z || 1}`
      ].join(";");
    }

    function startScenario(key) {
      const scenario = scenarios[key];
      if (!scenario || state.completed[key]) return;
      clearInterval(state.timerId);
      state.currentKey = key;
      state.found = new Set();
      state.lives = 3;
      state.time = 60;
      state.score = 0;
      state.hintUsed = false;

      $("#gameTitle").textContent = scenario.name;
      $("#sceneCard").style.setProperty("--scene-accent", scenario.colors.accent);
      $("#sceneCard").style.setProperty("--scene-dark", scenario.colors.dark);
      $("#sceneWrap").innerHTML = `<img class="scene-image" src="${scenario.sceneImage}" alt="Cena 2.5D realista: ${escapeHtml(scenario.name)}">` + scenario.risks.map(risk => `
        <button class="risk-target${risk.area?.legacy ? " legacy-size" : ""}" type="button" data-risk="${risk.id}" style="${riskTargetStyle(risk)}" aria-label="Área suspeita">
          <span class="risk-marker" aria-hidden="true">✓</span>
        </button>
      `).join("");
      $("#sceneWrap").querySelectorAll(".risk-target").forEach(button => button.addEventListener("click", event => {
        event.stopPropagation();
        findRisk(button.dataset.risk, button);
      }));
      $("#sceneWrap").onclick = wrongClick;
      renderInfo();
      updateHud();
      showScreen("gameScreen");

      const deadline = Date.now() + 60000;
      state.timerId = setInterval(() => {
        state.time = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
        updateHud();
        if (state.time <= 0) endScenario("time");
      }, 250);
    }

    function updateHud() {
      const scenario = scenarios[state.currentKey];
      const timer = $("#timerValue");
      timer.textContent = `00:${String(state.time).padStart(2, "0")}`;
      timer.classList.toggle("timer-danger", state.time <= 10);
      $("#foundValue").textContent = `${state.found.size}/${scenario ? scenario.risks.length : 7}`;
      $("#livesValue").textContent = "❤ ".repeat(state.lives).trim() + " ♡ ".repeat(3 - state.lives).trim();
    }

    function findRisk(id, button) {
      if (state.found.has(id)) return;
      const scenario = scenarios[state.currentKey];
      const risk = scenario.risks.find(item => item.id === id);
      if (!risk) return;
      state.found.add(id);
      state.score += 100 + state.time;
      button.classList.remove("hinted");
      button.classList.add("found");
      button.setAttribute("aria-disabled", "true");
      button.setAttribute("aria-label", `Risco encontrado: ${risk.name}`);
      playTone("success");
      toast(`+${100 + state.time} pontos`, "success");
      renderInfo(risk);
      updateHud();
      if (state.found.size === scenario.risks.length) setTimeout(() => endScenario("complete"), 450);
    }

    function wrongClick() {
      if (state.lives <= 0) return;
      state.lives--;
      playTone("error");
      toast("Não há um risco aí. Você perdeu uma vida.", "error");
      const layout = $("#gameLayout");
      layout.classList.remove("shake");
      void layout.offsetWidth;
      layout.classList.add("shake");
      updateHud();
      if (state.lives <= 0) setTimeout(() => endScenario("lives"), 450);
    }

    function renderInfo(risk = null) {
      const info = $("#infoPanel");
      if (risk) {
        info.innerHTML = `
          <div class="lesson-card">
            <span class="lesson-number">RISCO ${state.found.size} DE ${scenarios[state.currentKey].risks.length} ENCONTRADO</span>
            <h4>${escapeHtml(risk.name)}</h4>
            <div class="lesson-row"><strong>Perigo</strong><p>${escapeHtml(risk.danger)}</p></div>
            <div class="lesson-row"><strong>Medida de controle</strong><p>${escapeHtml(risk.control)}</p></div>
          </div>
          ${hintMarkup()}`;
      } else {
        info.innerHTML = `
          <h3>Olhe com atenção</h3>
          <p class="info-placeholder">Ao encontrar um risco, a orientação preventiva aparecerá aqui. Cliques fora dos riscos custam uma vida.</p>
          ${hintMarkup()}`;
      }
      $("#hintButton").addEventListener("click", useHint);
    }

    function hintMarkup() {
      return `<button class="primary-button hint-button" id="hintButton" type="button" ${state.hintUsed ? "disabled" : ""}>${state.hintUsed ? "Dica utilizada" : "Usar dica"}</button><span class="hint-cost">1 por cenário · penalidade de 50 pontos</span>`;
    }

    function useHint() {
      if (state.hintUsed) return;
      const remaining = scenarios[state.currentKey].risks.filter(risk => !state.found.has(risk.id));
      if (!remaining.length) return;
      state.hintUsed = true;
      state.score = Math.max(0, state.score - 50);
      const targetRisk = remaining[Math.floor(Math.random() * remaining.length)];
      const target = document.querySelector(`[data-risk="${targetRisk.id}"]`);
      target.classList.add("hinted");
      setTimeout(() => target.classList.remove("hinted"), 3400);
      toast("Observe a área destacada · −50 pontos", "error");
      renderInfo();
    }

    function calculateStars(foundCount, totalRisks) {
      if (foundCount === totalRisks && state.lives >= 2 && state.time >= 15) return 3;
      if (foundCount >= Math.ceil(totalRisks * .7)) return 2;
      return 1;
    }

    function endScenario(reason) {
      if (!state.currentKey || state.completed[state.currentKey]) return;
      clearInterval(state.timerId);
      const key = state.currentKey;
      const scenario = scenarios[key];
      const missed = scenario.risks.filter(risk => !state.found.has(risk.id));
      const stars = calculateStars(state.found.size, scenario.risks.length);
      state.completed[key] = { score: state.score, stars, found: state.found.size };

      const titles = { complete: "Todos os riscos foram controlados!", time: "O tempo acabou!", lives: "Suas vidas acabaram!" };
      $("#resultScreen").innerHTML = `
        <div class="result-card">
          <p class="eyebrow">${escapeHtml(scenario.name)}</p>
          <h2 id="resultTitle">${titles[reason]}</h2>
          <p class="result-summary">Você encontrou ${state.found.size} de ${scenario.risks.length} riscos.</p>
          <div class="stars" aria-label="${stars} de 3 estrelas">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
          <div class="result-score">${state.score} pontos</div>
          ${missed.length ? `
            <h3>Riscos que passaram despercebidos</h3>
            <ul class="missed-list">${missed.map(risk => `<li><strong>${escapeHtml(risk.name)}</strong><span><b>Controle:</b> ${escapeHtml(risk.control)}</span></li>`).join("")}</ul>
          ` : '<p class="success-note"><strong>Excelente!</strong> Nenhum risco passou despercebido neste cenário.</p>'}
          <button class="primary-button" id="continueButton" type="button">${Object.keys(state.completed).length === Object.keys(scenarios).length ? "Ver resultado final" : "Escolher próximo cenário"}</button>
        </div>`;
      $("#continueButton").addEventListener("click", () => {
        state.currentKey = null;
        if (Object.keys(state.completed).length === Object.keys(scenarios).length) renderFinal();
        else { renderSelection(); showScreen("selectionScreen"); }
      });
      showScreen("resultScreen");
    }

    function renderFinal() {
      const total = Object.values(state.completed).reduce((sum, item) => sum + item.score, 0);
      const totalFound = Object.values(state.completed).reduce((sum, item) => sum + item.found, 0);
      const maxTotal = Object.values(scenarios).reduce((sum, scenario) => sum + scenario.risks.length, 0);
      const overallStars = totalFound >= Math.ceil(maxTotal * .9) ? 3 : totalFound >= Math.ceil(maxTotal * .6) ? 2 : 1;
      $("#finalScreen").innerHTML = `
        <div class="final-card">
          <p class="eyebrow">Treinamento concluído</p>
          <h2 id="finalTitle">Resultado final</h2>
          <p class="result-summary">Você concluiu os três ambientes e encontrou ${totalFound} de ${maxTotal} riscos.</p>
          <div class="stars" aria-label="${overallStars} de 3 estrelas">${"★".repeat(overallStars)}${"☆".repeat(3 - overallStars)}</div>
          <div class="total-score">${total}</div>
          <p class="result-summary">pontos no total</p>
          <div class="breakdown">
            ${Object.entries(scenarios).map(([key, scenario]) => `<div><span>${scenario.emoji} ${escapeHtml(scenario.name)}</span><strong>${state.completed[key].score} pts</strong></div>`).join("")}
          </div>
          <button class="primary-button" id="restartButton" type="button">Jogar novamente</button>
        </div>`;
      $("#restartButton").addEventListener("click", restartGame);
      showScreen("finalScreen");
    }

    function restartGame() {
      clearInterval(state.timerId);
      state.currentKey = null;
      state.found = new Set();
      state.completed = {};
      state.lives = 3;
      state.time = 60;
      state.score = 0;
      state.hintUsed = false;
      renderSelection();
      showScreen("selectionScreen");
    }

    function exitToMenu() {
      clearInterval(state.timerId);
      state.currentKey = null;
      state.found = new Set();
      state.lives = 3;
      state.time = 60;
      state.score = 0;
      state.hintUsed = false;
      renderSelection();
      showScreen("selectionScreen");
    }

    $("#soundButton").addEventListener("click", toggleSound);
    $("#gameSoundButton").addEventListener("click", toggleSound);
    $("#exitGameButton").addEventListener("click", exitToMenu);
    document.addEventListener("pointerdown", startMenuMusic, { once: true });
    document.addEventListener("keydown", startMenuMusic, { once: true });
    renderSelection();

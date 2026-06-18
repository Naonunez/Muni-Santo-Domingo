const STORAGE_KEY = 'reportes_estados_vistos';

interface EstadoVisto {
  [id: number]: string;
}

export function guardarEstados(reportes: { id: number; estado: string }[]) {
  const mapa: EstadoVisto = {};
  reportes.forEach((r) => { mapa[r.id] = r.estado; });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mapa));
}

export function detectarCambios(reportes: { id: number; estado: string; tipo_reporte: string }[]): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const vistos: EstadoVisto = JSON.parse(raw);
    return reportes
      .filter((r) => vistos[r.id] && vistos[r.id] !== r.estado)
      .map((r) => `"${r.tipo_reporte}" cambió a ${r.estado.replace('_', ' ')}`);
  } catch {
    return [];
  }
}

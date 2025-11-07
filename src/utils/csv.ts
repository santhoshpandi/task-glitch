import { Task } from '@/types';

export function toCSV(tasks: ReadonlyArray<Task>): string {
  // Fix handling with stabled headers
  const headers = Object.keys(tasks[0]) as (keyof Task)[];
  console.log(headers)
  const rows = tasks.map(t => [
    t.id,
    escapeCsv(t.title),
    String(t.revenue),
    String(t.timeTaken),
    t.priority,
    t.status,
    escapeCsv(t.notes ?? ''),
  ]);
  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}

function escapeCsv(v: string): string {
  // Fix handling with qutoes,commas
  if (v === null) return ''
  const needsQuotes  =  /[",\n]/.test(v);
  let escaped = v.replace(/"/g, '""');
  return needsQuotes ? `"${escaped}"` : escaped;
}

export function downloadCSV(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}



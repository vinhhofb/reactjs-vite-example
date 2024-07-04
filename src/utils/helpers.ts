interface CoverItem {
    id: number;
    name: string;
}
export const transformedSelectOptions = (items: CoverItem[]): { value: number; label: string; }[] => items ? items.map(item => ({ value: item.id, label: item.name })) : [];
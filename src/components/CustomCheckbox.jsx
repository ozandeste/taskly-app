import * as Checkbox from '@radix-ui/react-checkbox';

export default function CustomCheckbox({ checked, onCheckedChange }) {
  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="w-10 h-10 rounded bg-gray-200 data-[state=checked]:bg-blue-600 transition-colors cursor-pointer"
    >
      <Checkbox.Indicator className="text-white flex items-center justify-center">
        ✓
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
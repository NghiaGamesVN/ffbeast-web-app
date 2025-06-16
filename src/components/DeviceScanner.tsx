import React, { useState, useEffect } from 'react';

interface Props {
  onSelect: (device: HIDDevice) => void;
}

export default function DeviceScanner({ onSelect }: Props) {
  const [devices, setDevices] = useState<HIDDevice[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Khi component mount, load các HID device đã cho phép trước đó
  useEffect(() => {
    if (!navigator.hid) {
      setError('Trình duyệt không hỗ trợ WebHID.');
      return;
    }
    navigator.hid.getDevices()
      .then(devs => setDevices(devs.filter(d => d.vendorId === 0x2341)))
      .catch(() => {});
  }, []);

  const scan = async () => {
    setError(null);
    try {
      const devs = await navigator.hid.requestDevice({
        filters: [{ vendorId: 0x2341 }]
      });
      setDevices(devs);
    } catch (err) {
      console.error(err);
      setError('Không chọn được thiết bị.');
      setDevices([]);
    }
  };

  return (
    <div>
      <button
        onClick={scan}
        className="px-4 py-2 bg-indigo-500 text-white rounded"
      >
        Quét thiết bị
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}

      {devices.length === 0 ? (
        <p className="mt-2 text-sm text-gray-600">
          {!error ? 'Chưa có thiết bị nào được cấp quyền.' : null}
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {devices.map((d, i) => (
            <li key={i} className="flex items-center justify-between">
              <span>{d.productName || `${d.vendorId}:${d.productId}`}</span>
              <button
                onClick={async () => {
                  await d.open();
                  onSelect(d);
                }}
                className="px-3 py-1 bg-green-600 text-white rounded"
              >
                Kết nối
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
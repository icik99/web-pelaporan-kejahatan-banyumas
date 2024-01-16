import api from '@/pages/api/hello';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
});

const Polygon = dynamic(() => import('react-leaflet').then((mod) => mod.Polygon), {
  ssr: false,
});

const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
});

const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
  ssr: false,
});

const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

// Pastikan CSS Leaflet hanya diimpor di browser
if (typeof window !== 'undefined') {
  require('leaflet/dist/leaflet.css');
}

export default function PetaLokasiKejahatan() {
  const [dataBatasDesa, setDataBatasDesa] = useState();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState('');


  const getBatasDesa = async () => {
    try {
      const response = await api.GetBatasArea(localStorage.getItem('token'));
      setDataBatasDesa(response.data.data);
      console.log(response, 'resDesa');
    } catch (error) {
      console.log(error);
    }
  };

  function calculateCenterCoordinate(coordinates) {
    const totalPoints = coordinates.length;
    const sumLat = coordinates.reduce((sum, coord) => sum + coord[0], 0);
    const sumLng = coordinates.reduce((sum, coord) => sum + coord[1], 0);

    return [sumLat / totalPoints, sumLng / totalPoints];
  }

  useEffect(() => {
    getBatasDesa();
  }, []);

  if (!dataBatasDesa) {
    return (
      <h1 className='h-screen flex items-center justify-center text-2xl w-full'>Memuat data peta....</h1>
    );
  }

  return (
    <div className='w-full'>
      <div className='px-[40px]'>
            <div className='w-full h-1/3 rounded-lg border-2 shadow-md'>
              <MapContainer center={[-7.454701519566872, 109.17318016583107]} zoom={12}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                  Object.values(dataBatasDesa).map((item, idx) => {
                  const koordinat = item.batas_area[0].map((data) => [data[1], data[0]])
                  const centerCoordinate = calculateCenterCoordinate(koordinat);
                  const fillcolor = item.status === 'Aman'? 'green': item.status === 'Siaga' ? 'Yellow' : 'red'
                  return(
                    <div key={idx}>
                      <Polygon 
                        positions={koordinat}
                        pathOptions={{
                          fillColor: fillcolor,
                          fillOpacity: 0.7,
                          weight: 2,
                          opacity: 1,
                          dashArray: 1,
                          color: 'white'
                        }}
                        eventHandlers={{
                          mouseover: (e) => {
                            const layer = e.target
                            layer.setStyle({
                              fillOpacity: 0.7,
                              weight: 2,
                              dashArray: "",
                              color: 'black'
                            })
                          },
                          mouseout: (e) => {
                            const layer = e.target
                            layer.setStyle({
                              fillOpacity: 0.7,
                              weight: 2,
                              dashArray: "3",
                              color: 'white',
                              fillcolor: fillcolor
                            })
                          },
                        //   click: () => {
                        //     setPopupData(item);
                        //     setPopupOpen(!popupOpen);
                        //   },
                        }}
                      />
                    </div>
                  )
                })}
                 {/* {popupOpen && (
                    <Popup position={calculateCenterCoordinate(popupData.batas_area[0].map((data) => [data[1], data[0]]))}>
                      <div style={{ fontWeight: 'bold' }}>
                        <p style={{ textAlign: 'center' }}>Informasi daerah</p>
                        <p>Kecamatan: <span style={{ fontWeight: 'normal' }}>{popupData.name_kecamatan}</span></p>
                        <p>Desa: <span style={{ fontWeight: 'normal' }}>{popupData.name}</span></p>
                        <p>Status: <span style={{ fontWeight: 'normal' }}>{popupData.status}</span></p>
                        <p style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/daerah-rawan-narkoba/detail-daerah', {state: {idDesaKecamatan: popupData.id}})}>
                          Lihat Detail
                        </p>
                      </div>
                    </Popup>
                  )} */}
              </MapContainer>
            </div>
          </div>
    </div>
  );
}

import { Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import ButtonSelectGroup from '../components/ButtonSelectGroup';
import MapGrid from '../components/MapGrid';
import { useState } from 'react';
import { MapData, MapElement, MapPool, mapList } from '../data/mapInfo';

function mapSelected(map: MapData){
    window.location.href = "/" + map.name
}

function MapSelect() {
    const [ maps, setMaps ] = useState<MapElement[]>(mapList.map((map) => {
		return {
			data: map,
			shown: true
		};
	}));

	const displayValue = useBreakpointValue({ base: false, md: true });

	const onFilterSelect = (option: string | null) => {
        setMaps(maps.map((map) => {
            if (!option) {
                map.shown = true;
                return map;
            }
            
            map.shown = map.data.pools.includes(option as MapPool);
            return map;
        }));
	};

    const [ mapPool, setMapPool ] = useState<MapPool[]>(['STANDARD', 'QUICK MATCH', 'RANKED', 'TEAM DEATHMATCH'])

    return (
        <Stack direction={'column'} spacing={25}>
            <Text fontSize={'80px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'67px'} mt={50} color={'#fff'} textAlign={'center'}>SELECT A MAP</Text>
            <Stack direction={'column'} spacing={'50px'}>
                <Stack direction={'column'} spacing={0}>
                    <Text fontSize={'50px'} fontFamily={'scoutcond'} textTransform={'uppercase'} lineHeight={'67px'} color={'#fff'} textAlign={'center'}>
                        {displayValue ? 'OPERATION DEADLY OMEN - ' : ''}PLAYLIST FILTERS
                    </Text>
                    <ButtonSelectGroup<MapPool> onSelect={onFilterSelect} options={mapPool} />
                </Stack>
                <MapGrid maps={maps} onSelect={mapSelected}/>
            </Stack>
        </Stack>
    );
}

export default MapSelect;
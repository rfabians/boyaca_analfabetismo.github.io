## Taller 2 Bases de Datos Georelacionales
## Especialización en Sistemas de Información Geográfica

### Rafael Fabian Sanchez Osorio - 20222094026

El modelo de datos geo-relacional es una forma de combinar la información geoespacial y alfanumérica en una sola base de datos. Es común utilizar sistemas administradores de bases de datos para almacenar información alfanumérica y sistemas de información geográfica (SIG) para la información geométrica y topológica.

La integración de estos dos tipos de datos en una sola base de datos es crucial para muchas aplicaciones geoespaciales, como la gestión de recursos naturales, la planificación urbana, la navegación y la cartografía digital. El modelo de datos geo-relacional permite la relación de ambos tipos de información, que se almacenan de formas completamente diferentes, lo que facilita su análisis y manipulación.

En este modelo, la información alfanumérica y la espacial se relacionan mediante columnas en común, como identificadores de objetos geográficos, nombres de lugares o direcciones. Estas columnas se utilizan para conectar los datos alfanuméricos y espaciales de manera que puedan ser visualizados y analizados juntos.

Una ventaja del modelo de datos geo-relacional es que permite realizar consultas y análisis de datos complejos que abarcan tanto información espacial como alfanumérica. Por ejemplo, se puede buscar la ubicación de un determinado cliente en función de su dirección y mostrarlo en un mapa, o calcular la distancia entre dos puntos en función de su latitud y longitud.

En resumen, el modelo de datos geo-relacional es una herramienta fundamental en el campo de la geoinformática, ya que permite la integración de información alfanumérica y espacial en una sola base de datos. Esto hace posible el análisis y la manipulación de datos espaciales complejos y su utilización en diversas aplicaciones geoespaciales.


## Ejercicio

Se desea generar un mapa con los munipios del departamento de Boyacá,  con la cantidad de personas analfebetas

Para este fin se descargo la información del DANE del censo población del 2018.

Información Alfanumerica: [Colombia - Censo Nacional de Población y Vivienda - CNPV - 2018 (dane.gov.co)](https://microdatos.dane.gov.co/index.php/catalog/643/get-microdata)

Información Geográfica: [Descarga de Información Geográfica - Geovisor CNPV 2018 (dane.gov.co)](https://geoportal.dane.gov.co/servicios/descarga-y-metadatos/visor-descarga-geovisores/)

Descarga la información se procedio a cargarla dentro de postgis, para lo cual se utilizo el Software QGIS.


![imagen](https://raw.githubusercontent.com/rfabians/boyaca_analfabetismo.github.io/main/MunicipiosBoyaca.png)


![imagen](https://raw.githubusercontent.com/rfabians/boyaca_analfabetismo.github.io/main/censoPersonas.png))

Realizado la carga de datos se aprecia  que las columnas de los identificadores de los codigos de Departemento y Municipia se encuentra en formato de tipo entero en la tabla con la información alfanumerica, sin embargo en la tabla con la información de los municipios estas columnas son de tipo texto.

![tablaAlfanumerica.png (1284×541) (raw.githubusercontent.com)](https://raw.githubusercontent.com/rfabians/boyaca_analfabetismo.github.io/main/tablaAlfanumerica.png)

Con el objetivo de establecer la referencia entre los datos espaciales y los alfanumericos se hace necesario parsear los tipos de datos a un tipo de dato en común.

``` sql:
ALTER TABLE public.censo_personas ALTER COLUMN u_dpto TYPE varchar(3) USING u_dpto::varchar;
ALTER TABLE public.censo_personas ALTER COLUMN u_mpio TYPE varchar(3) USING u_mpio::varchar;
```

Con el tipo de datos ajustado se procedio a actualizar los campos inconsistentes, añadiendo los ceros a la izquierda a los municipios faltante.

``` sql
update public.censo_personas 
set u_mpio = t.cod_munipio from(select case 
	when char_length(u_mpio)= 1 then '00'||u_mpio
	when char_length(u_mpio) = 2 then '0'||u_mpio
	else u_mpio end as cod_munipio, u_mpio from censo_personas) as t
where t.u_mpio = public.censo_personas.u_mpio;
```


Una vez actualizados los ID de los municipios del departamento de Boyacá se procede a obtener la  cantidad de los personsa analfabetas por municipio.

``` sql
ALTER TABLE public.municipios ADD personas_analfabetas int4;
```

Posteriormente se procede a realizar el conteo de personas analfabetas por municipio.

``` sql
update public.municipios m
set personas_analfabetas = t.cantidad from (
select u_mpio, count(*) as cantidad from
censo_personas where p_alfabeta  = 2
group by 1
) as t where t.u_mpio = m.mpio_ccdgo;
```

Finalmente se crea el mapa con la representación de la cantidad de personas analfabetas por municipio.

WebMap: [Analfabetismo Boyacá](https://rfabians.github.io/boyaca_analfabetismo.github.io/)


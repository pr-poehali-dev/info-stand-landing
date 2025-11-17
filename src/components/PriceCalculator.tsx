import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const PriceCalculator = () => {
  const [width, setWidth] = useState<number>(100);
  const [height, setHeight] = useState<number>(100);
  const [pvcThickness, setPvcThickness] = useState<string>('3mm');
  const [printing, setPrinting] = useState<string>('interior');
  const [pockets, setPockets] = useState<string[]>([]);

  const pvcPrices: Record<string, number> = {
    '3mm': 700,
    '5mm': 1150,
    '8mm': 1190,
    '10mm': 1450
  };

  const printingPrices: Record<string, number> = {
    interior: 1490,
    interiorLaminated: 1580,
    uvVinyl: 1810,
    oracal: 3160
  };

  const pocketPrices: Record<string, number> = {
    a5: 150,
    a4: 250,
    a3: 350,
    a2: 650
  };

  const area = (width * height) / 10000;
  const pvcCost = area * pvcPrices[pvcThickness];
  const printingCost = area * printingPrices[printing];
  const pocketsCost = pockets.reduce((sum, size) => sum + pocketPrices[size], 0);
  const totalPrice = Math.round(pvcCost + printingCost + pocketsCost);

  const togglePocket = (size: string) => {
    setPockets(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  return (
    <section id="calculator" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-4 text-secondary">
          Калькулятор стоимости
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Рассчитайте примерную стоимость без учета макета и монтажа
        </p>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-secondary">Параметры стенда</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="width" className="text-base">
                  Ширина (см)
                </Label>
                <Input
                  id="width"
                  type="number"
                  min="10"
                  max="500"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height" className="text-base">
                  Высота (см)
                </Label>
                <Input
                  id="height"
                  type="number"
                  min="10"
                  max="500"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="text-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pvc" className="text-base">
                Толщина ПВХ
              </Label>
              <Select value={pvcThickness} onValueChange={setPvcThickness}>
                <SelectTrigger id="pvc" className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3mm">3 мм</SelectItem>
                  <SelectItem value="5mm">5 мм</SelectItem>
                  <SelectItem value="8mm">8 мм</SelectItem>
                  <SelectItem value="10mm">10 мм</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="printing" className="text-base">
                Изображение
              </Label>
              <Select value={printing} onValueChange={setPrinting}>
                <SelectTrigger id="printing" className="text-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interior">Печать интерьерная без ламинации</SelectItem>
                  <SelectItem value="interiorLaminated">Печать интерьерная с ламинацией</SelectItem>
                  <SelectItem value="uvVinyl">УФ печать на виниловой пленке</SelectItem>
                  <SelectItem value="oracal">Аппликация Оракал 641</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-base">Карманы (опционально)</Label>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="a5" 
                    checked={pockets.includes('a5')}
                    onCheckedChange={() => togglePocket('a5')}
                  />
                  <label htmlFor="a5" className="text-sm cursor-pointer">
                    А5
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="a4" 
                    checked={pockets.includes('a4')}
                    onCheckedChange={() => togglePocket('a4')}
                  />
                  <label htmlFor="a4" className="text-sm cursor-pointer">
                    А4
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="a3" 
                    checked={pockets.includes('a3')}
                    onCheckedChange={() => togglePocket('a3')}
                  />
                  <label htmlFor="a3" className="text-sm cursor-pointer">
                    А3
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="a2" 
                    checked={pockets.includes('a2')}
                    onCheckedChange={() => togglePocket('a2')}
                  />
                  <label htmlFor="a2" className="text-sm cursor-pointer">
                    А2
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Площадь:</span>
                <span className="font-medium">{area.toFixed(2)} м²</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">ПВХ:</span>
                <span className="font-medium">{Math.round(pvcCost)} ₽</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Изображение:</span>
                <span className="font-medium">{Math.round(printingCost)} ₽</span>
              </div>
              {pocketsCost > 0 && (
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Карманы:</span>
                  <span className="font-medium">{pocketsCost} ₽</span>
                </div>
              )}
              <div className="flex justify-between items-center text-2xl font-bold mt-4 pt-4 border-t">
                <span className="text-secondary">Итого:</span>
                <span className="text-primary">{totalPrice.toLocaleString('ru-RU')} ₽</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                * Стоимость без учета макета и монтажа. Точную цену уточняйте у менеджера
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceCalculator;
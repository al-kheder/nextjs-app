'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import Select from 'react-select';
import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { Item } from './page';
import { ItemSelect } from './ItemSelect';

const formSchema = z.object({
  username: z.string().optional(),
  items: z
    .array(
      z.object({
        id: z.number().optional(),
        quantity: z.string().optional(),
        name: z.string().optional(),
        price: z.string().optional(),
      })
    )
    .optional(),
});

export default function Invoce({ itemList }: { itemList: Item[] }) {
  // ...
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  });
  function onSubmit() {
    console.log(form.getValues());
  }
  const watchFieldArray = form.watch('items');
  console.log(watchFieldArray);

  function getTotalsPrice(index: number) {
    const item = watchFieldArray[index];
    if (item) {
      return item.price * item.quantity;
    }
    return 0;
  }

  function getInvoiceTotalPrice() {
    return watchFieldArray?.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  return (
    <div className="p-5 flex justify-start">
      <ItemSelect
        data={itemList}
        onSelectItem={(data) => {
          console.log(data);
          append({
            quantity: '',
            name: data.label,
            price: '',
            id: data.value,
          });
        }}
      />

      <div>total invoce price: {getInvoiceTotalPrice()}</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Invoice Number</FormLabel>
                <FormControl>
                  <Input placeholder="invoice number.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {fields.map((field: any, index) => {
            console.log(field);
            return (
              <div key={field.id} className="flex gap-5">
                {field.name}

                <FormField
                  control={form.control}
                  name={`items.${index}.quantity`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>quantity</FormLabel>
                      <FormControl>
                        <Input placeholder="quantity" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`items.${index}.price`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input placeholder="price" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>totlal price: {getTotalsPrice(index)}</div>

                <Button onClick={() => remove(index)}>Remove</Button>
              </div>
            );
          })}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

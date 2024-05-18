'use client'

import { TextInput, ActionIcon, rem } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';
import { FormEvent, useState } from 'react';
import { ISearchForm } from './type';
import styles from './SearchForm.module.css';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/src/shared/model/config/redux/hooks';
import { doAsync } from '../model/slices/counterSlice';
import classNames from 'classnames';

export function SearchForm(props: ISearchForm ) {

  const [value, setValue] = useState<string>('')
  const router = useRouter();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state)=>state.counter.status)


  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    //const params = '?CSR=true'
    const url = `/info/${value}`;

    try {
      await dispatch(doAsync(Number(value)))
      router.push(url)
    } catch(err) {
      console.log(err);
    }
  }

  const classesForErrMsg = classNames({
    [styles.error] : true,
    [styles.hidden] : status !== 'failed'
  })

  return (
    <form action="#" onSubmit={(e)=>onSubmit(e)} className={styles.searchForm} {...props} >

      <label htmlFor="search">
        <span className={styles.title}>write INN</span> 
        <TextInput
        id='search'
        type='number'
        required
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        radius="xl"
        size="md"
        placeholder="Search questions"
        rightSectionWidth={42}
        leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        rightSection={
          <ActionIcon size={32} radius="xl" variant="filled" type='submit'>
            <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        }
      />
      </label>
      <span className={classesForErrMsg}>something went wrong</span>
      
    </form>
  );
}
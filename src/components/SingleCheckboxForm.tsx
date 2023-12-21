import { useForm } from 'react-hook-form';

export const SingleCheckboxForm = () => {
  const { register, watch } = useForm();

  return (
    <div>
      <pre>
        <code>フォームの値：{JSON.stringify(watch('multiple'))}</code>
      </pre>

      <form>
        <fieldset>
          <label>
            <input {...register('multiple')} type="checkbox" value="foo" />
            foo
          </label>
        </fieldset>
      </form>
    </div>
  );
};

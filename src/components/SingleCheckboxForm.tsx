import { useForm } from 'react-hook-form';

export const SingleCheckboxForm = () => {
  const { register, watch } = useForm();

  return (
    <div>
      <pre>
        <code>フォームの値：{JSON.stringify(watch('single'))}</code>
      </pre>

      <form>
        <fieldset>
          <label>
            <input {...register('single')} type="checkbox" value="foo" />
            foo
          </label>
        </fieldset>
      </form>
    </div>
  );
};
